'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '../../../client/src/components/ui/card';
import { Button } from '../../../client/src/components/ui/button';
import { Input } from '../../../client/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../client/src/components/ui/select';
import { Search, Download, Eye } from 'lucide-react';
import { useToast } from '../../../client/src/hooks/use-toast';

interface Lead {
  id: number;
  name: string;
  email: string;
  organization?: string;
  message: string;
  status: string;
  source?: string;
  created_at: string;
  notes?: string;
  assigned_to?: string;
  contacted_at?: string;
}

async function fetchLeads(status: string, search: string, page: number) {
  const params = new URLSearchParams({
    status,
    page: page.toString(),
    limit: '50',
  });
  if (search) {
    params.append('search', search);
  }

  const response = await fetch(`/api/admin/leads?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch leads');
  }
  return response.json();
}

async function exportLeads() {
  const response = await fetch('/api/admin/leads?format=csv');
  if (!response.ok) {
    throw new Error('Failed to export leads');
  }
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `leads-export-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

export default function LeadsPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { toast } = useToast();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['leads', statusFilter, searchQuery, page],
    queryFn: () => fetchLeads(statusFilter, searchQuery, page),
  });

  const handleExport = async () => {
    try {
      await exportLeads();
      toast({
        title: 'Export successful',
        description: 'Leads exported to CSV',
      });
    } catch (error: any) {
      toast({
        title: 'Export failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const leads = data?.leads || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Leads</h1>
          <p className="text-muted">Manage and track all contact form submissions</p>
        </div>
        <Button onClick={handleExport} className="rounded-xl">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
              <Input
                placeholder="Search by name, email, or organization..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={(value) => {
              setStatusFilter(value);
              setPage(1);
            }}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      {isLoading ? (
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-muted">Loading leads...</p>
          </CardContent>
        </Card>
      ) : error ? (
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-red-500">Error loading leads</p>
          </CardContent>
        </Card>
      ) : leads.length === 0 ? (
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-muted">No leads found</p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Desktop Table View */}
          <Card className="hidden md:block">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">Organization</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leads.map((lead: Lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-primary">{lead.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-muted">{lead.organization || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              lead.status === 'new'
                                ? 'bg-yellow-100 text-yellow-800'
                                : lead.status === 'contacted'
                                ? 'bg-blue-100 text-blue-800'
                                : lead.status === 'qualified'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link href={`/admin/leads/${lead.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {leads.map((lead: Lead) => (
              <Card key={lead.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{lead.name}</h3>
                      <p className="text-sm text-muted">{lead.email}</p>
                      {lead.organization && (
                        <p className="text-sm text-muted mt-1">{lead.organization}</p>
                      )}
                    </div>
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
                  <p className="text-xs text-muted mb-3">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                  <Link href={`/admin/leads/${lead.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="text-sm text-muted">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

