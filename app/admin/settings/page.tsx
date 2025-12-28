'use client';

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '../../../client/src/components/ui/card';
import { Button } from '../../../client/src/components/ui/button';
import { Input } from '../../../client/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../client/src/components/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '../../../client/src/hooks/use-toast';

interface AdminUser {
  id: string;
  email: string;
  role: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
}

async function fetchUsers() {
  const response = await fetch('/api/admin/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

async function createUser(userData: {
  email: string;
  password: string;
  role: string;
  firstName?: string;
  lastName?: string;
}) {
  const response = await fetch('/api/admin/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create user');
  }
  return response.json();
}

export default function SettingsPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    role: 'admin',
    firstName: '',
    lastName: '',
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: fetchUsers,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      setIsCreating(false);
      setNewUser({
        email: '',
        password: '',
        role: 'admin',
        firstName: '',
        lastName: '',
      });
      toast({
        title: 'User created',
        description: 'Admin user created successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Creation failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const users: AdminUser[] = data?.users || [];

  const handleCreate = () => {
    if (!newUser.email || !newUser.password) {
      toast({
        title: 'Validation error',
        description: 'Email and password are required',
        variant: 'destructive',
      });
      return;
    }

    createMutation.mutate(newUser);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Settings</h1>
        <p className="text-muted">Manage admin users and system settings</p>
      </div>

      {/* Create New User */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Admin Users</CardTitle>
            <Button
              onClick={() => setIsCreating(!isCreating)}
              className="rounded-xl bg-primary hover:bg-primary/90 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              {isCreating ? 'Cancel' : 'Add User'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isCreating && (
            <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="user@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Password *
                  </label>
                  <Input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    First Name
                  </label>
                  <Input
                    value={newUser.firstName}
                    onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <Input
                    value={newUser.lastName}
                    onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                    placeholder="Last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Role *
                  </label>
                  <Select
                    value={newUser.role}
                    onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="super_admin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                onClick={handleCreate}
                disabled={createMutation.isPending}
                className="rounded-xl bg-primary hover:bg-primary/90 text-white"
              >
                {createMutation.isPending ? 'Creating...' : 'Create User'}
              </Button>
            </div>
          )}

          {/* Users List */}
          {isLoading ? (
            <p className="text-center text-muted py-8">Loading users...</p>
          ) : users.length === 0 ? (
            <p className="text-center text-muted py-8">No admin users found</p>
          ) : (
            <div className="mt-6 space-y-2">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-primary">{user.email}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          user.role === 'super_admin'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {user.role === 'super_admin' ? 'Super Admin' : 'Admin'}
                      </span>
                    </div>
                    {user.first_name && user.last_name && (
                      <p className="text-sm text-muted mt-1">
                        {user.first_name} {user.last_name}
                      </p>
                    )}
                    <p className="text-xs text-muted mt-1">
                      Created: {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

