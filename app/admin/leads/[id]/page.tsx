'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, Mail, Phone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Lead {
  id: number;
  name: string;
  email: string;
  organization?: string;
  message: string;
  status: string;
  source?: string;
  notes?: string;
  assigned_to?: string;
  contacted_at?: string;
  created_at: string;
}

async function fetchLead(id: string) {
  const response = await fetch(`/api/admin/leads?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch lead');
  }
  return response.json();
}

async function updateLead(id: number, updates: Partial<Lead>) {
  const response = await fetch('/api/admin/leads', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...updates }),
  });
  if (!response.ok) {
    throw new Error('Failed to update lead');
  }
  return response.json();
}

export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const leadId = params.id as string;

  const { data, isLoading } = useQuery({
    queryKey: ['lead', leadId],
    queryFn: () => fetchLead(leadId),
  });

  const updateMutation = useMutation({
    mutationFn: (updates: Partial<Lead>) => updateLead(Number(leadId), updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lead', leadId] });
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      toast({
        title: 'Lead updated',
        description: 'Changes saved successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Update failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (data?.lead) {
      setStatus(data.lead.status);
      setNotes(data.lead.notes || '');
    }
  }, [data]);

  const handleSave = () => {
    updateMutation.mutate({ status, notes });
  };

  const handleMarkContacted = () => {
    updateMutation.mutate({
      status: 'contacted',
      contacted_at: new Date().toISOString(),
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-muted">Loading lead...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const lead: Lead = data?.lead;

  if (!lead) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-red-500">Lead not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-primary">Lead Details</h1>
          <p className="text-muted">Manage lead information and status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-muted mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted">Email</p>
                  <p className="text-primary">{lead.email}</p>
                </div>
              </div>
              {lead.organization && (
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-muted mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted">Organization</p>
                    <p className="text-primary">{lead.organization}</p>
                  </div>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-muted mb-2">Name</p>
                <p className="text-primary">{lead.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted mb-2">Message</p>
                <p className="text-muted whitespace-pre-wrap">{lead.message}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions & Status */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status & Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Status
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {lead.status !== 'contacted' && (
                <Button
                  onClick={handleMarkContacted}
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white"
                >
                  Mark as Contacted
                </Button>
              )}

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Notes
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add notes about this lead..."
                  className="min-h-[150px]"
                />
              </div>

              <Button
                onClick={handleSave}
                disabled={updateMutation.isPending}
                className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <p className="text-muted">Created</p>
                <p className="text-primary">
                  {new Date(lead.created_at).toLocaleString()}
                </p>
              </div>
              {lead.source && (
                <div>
                  <p className="text-muted">Source</p>
                  <p className="text-primary">{lead.source}</p>
                </div>
              )}
              {lead.contacted_at && (
                <div>
                  <p className="text-muted">Contacted</p>
                  <p className="text-primary">
                    {new Date(lead.contacted_at).toLocaleString()}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

