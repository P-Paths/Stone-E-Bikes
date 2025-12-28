import React from 'react';
import { createClient } from '../../lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '../../client/src/components/ui/card';
import { Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../client/src/components/ui/button';

async function getKPIs() {
  const supabase = await createClient();
  
  // Total leads
  const { count: totalLeads } = await supabase
    .from('contacts')
    .select('*', { count: 'exact', head: true });

  // New leads today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const { count: newLeadsToday } = await supabase
    .from('contacts')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', today.toISOString());

  // Contacted leads
  const { count: contactedLeads } = await supabase
    .from('contacts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'contacted');

  // Response rate
  const responseRate = totalLeads && totalLeads > 0
    ? Math.round((contactedLeads || 0) / totalLeads * 100)
    : 0;

  return {
    totalLeads: totalLeads || 0,
    newLeadsToday: newLeadsToday || 0,
    contactedLeads: contactedLeads || 0,
    responseRate,
  };
}

async function getRecentLeads() {
  const supabase = await createClient();
  const { data: leads } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  return leads || [];
}

export default async function AdminDashboard() {
  const kpis = await getKPIs();
  const recentLeads = await getRecentLeads();

  const kpiCards = [
    {
      title: 'Total Leads',
      value: kpis.totalLeads,
      icon: Users,
      color: 'text-primary',
    },
    {
      title: 'New Today',
      value: kpis.newLeadsToday,
      icon: Clock,
      color: 'text-accent',
    },
    {
      title: 'Contacted',
      value: kpis.contactedLeads,
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      title: 'Response Rate',
      value: `${kpis.responseRate}%`,
      icon: TrendingUp,
      color: 'text-blue-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-muted">Welcome to your command center</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted">
                  {kpi.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{kpi.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Leads */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Link href="/admin/leads">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {recentLeads.length === 0 ? (
            <p className="text-muted text-center py-8">No leads yet</p>
          ) : (
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-primary">{lead.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          lead.status === 'new'
                            ? 'bg-yellow-100 text-yellow-800'
                            : lead.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted mt-1">{lead.email}</p>
                    {lead.organization && (
                      <p className="text-sm text-muted">{lead.organization}</p>
                    )}
                    <p className="text-xs text-muted mt-2">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Link href={`/admin/leads/${lead.id}`}>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

