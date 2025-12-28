import { NextResponse } from 'next/server';
import { createClient } from '../../../../lib/supabase/server';

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const { data: adminUser } = await supabase
      .from('admin_users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!adminUser) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '30'; // days

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(period));

    // Total leads
    const { count: totalLeads } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });

    // Leads over time (daily)
    const { data: leadsOverTime } = await supabase
      .from('contacts')
      .select('created_at, status')
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: true });

    // Group by date
    const dailyLeads: Record<string, { date: string; count: number; contacted: number }> = {};
    leadsOverTime?.forEach((lead) => {
      const date = new Date(lead.created_at).toISOString().split('T')[0];
      if (!dailyLeads[date]) {
        dailyLeads[date] = { date, count: 0, contacted: 0 };
      }
      dailyLeads[date].count++;
      if (lead.status === 'contacted') {
        dailyLeads[date].contacted++;
      }
    });

    const leadsOverTimeData = Object.values(dailyLeads).sort((a, b) =>
      a.date.localeCompare(b.date)
    );

    // Lead sources
    const { data: sourceData } = await supabase
      .from('contacts')
      .select('source')
      .gte('created_at', startDate.toISOString());

    const sourceCounts: Record<string, number> = {};
    sourceData?.forEach((lead) => {
      const source = lead.source || 'unknown';
      sourceCounts[source] = (sourceCounts[source] || 0) + 1;
    });

    const sourceDataArray = Object.entries(sourceCounts).map(([name, value]) => ({
      name,
      value,
    }));

    // Status breakdown
    const { data: statusData } = await supabase
      .from('contacts')
      .select('status')
      .gte('created_at', startDate.toISOString());

    const statusCounts: Record<string, number> = {};
    statusData?.forEach((lead) => {
      const status = lead.status || 'new';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });

    const statusDataArray = Object.entries(statusCounts).map(([name, value]) => ({
      name,
      value,
    }));

    // Response rate
    const contactedCount = statusCounts['contacted'] || 0;
    const totalInPeriod = statusData?.length || 0;
    const responseRate = totalInPeriod > 0 ? (contactedCount / totalInPeriod) * 100 : 0;

    // New leads today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { count: newLeadsToday } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today.toISOString());

    return NextResponse.json({
      totalLeads: totalLeads || 0,
      newLeadsToday: newLeadsToday || 0,
      responseRate: Math.round(responseRate),
      leadsOverTime: leadsOverTimeData,
      sources: sourceDataArray,
      statusBreakdown: statusDataArray,
    });
  } catch (error: any) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

