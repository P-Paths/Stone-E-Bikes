'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '../../../client/src/components/ui/card';
import { Button } from '../../../client/src/components/ui/button';
import { Textarea } from '../../../client/src/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Eye } from 'lucide-react';
import { useToast } from '../../../client/src/hooks/use-toast';

const pages = [
  { slug: 'home', name: 'Home' },
  { slug: 'about', name: 'About' },
  { slug: 'platform', name: 'Platform' },
  { slug: 'partnerships', name: 'Partnerships' },
];

const pageSections: Record<string, { key: string; label: string; type: 'text' | 'textarea' }[]> = {
  home: [
    { key: 'hero_title', label: 'Hero Title', type: 'text' },
    { key: 'hero_subtitle', label: 'Hero Subtitle', type: 'textarea' },
    { key: 'key_point_1_title', label: 'Key Point 1 - Title', type: 'text' },
    { key: 'key_point_1_text', label: 'Key Point 1 - Text', type: 'textarea' },
    { key: 'key_point_2_title', label: 'Key Point 2 - Title', type: 'text' },
    { key: 'key_point_2_text', label: 'Key Point 2 - Text', type: 'textarea' },
    { key: 'key_point_3_title', label: 'Key Point 3 - Title', type: 'text' },
    { key: 'key_point_3_text', label: 'Key Point 3 - Text', type: 'textarea' },
    { key: 'mission_title', label: 'Mission Title', type: 'text' },
    { key: 'mission_text', label: 'Mission Text', type: 'textarea' },
  ],
  about: [
    { key: 'founder_story', label: 'Founder Story', type: 'textarea' },
    { key: 'detroit_roots', label: 'Detroit Roots', type: 'textarea' },
  ],
  platform: [
    { key: 'overview', label: 'Platform Overview', type: 'textarea' },
    { key: 'features', label: 'Key Features', type: 'textarea' },
    { key: 'applications', label: 'Applications', type: 'textarea' },
  ],
  partnerships: [
    { key: 'partnership_overview', label: 'Partnership Overview', type: 'textarea' },
    { key: 'pilot_programs', label: 'Pilot Programs', type: 'textarea' },
    { key: 'investment', label: 'Investment Opportunities', type: 'textarea' },
  ],
};

async function fetchContent(pageSlug: string) {
  const response = await fetch(`/api/admin/content?page=${pageSlug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch content');
  }
  const data = await response.json();
  return data.content || [];
}

async function saveContent(pageSlug: string, sectionKey: string, content: string) {
  const response = await fetch('/api/admin/content', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pageSlug,
      sectionKey,
      content: { text: content },
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to save content');
  }
  return response.json();
}

export default function ContentPage() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [content, setContent] = useState<Record<string, string>>({});
  const [hasChanges, setHasChanges] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: savedContent, isLoading } = useQuery({
    queryKey: ['content', selectedPage],
    queryFn: () => fetchContent(selectedPage),
  });

  useEffect(() => {
    if (savedContent) {
      const contentMap: Record<string, string> = {};
      savedContent.forEach((item: any) => {
        contentMap[item.section_key] = item.content?.text || '';
      });
      setContent(contentMap);
      setHasChanges(false);
    }
  }, [savedContent]);

  const updateMutation = useMutation({
    mutationFn: ({ sectionKey, content: text }: { sectionKey: string; content: string }) =>
      saveContent(selectedPage, sectionKey, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content', selectedPage] });
      setHasChanges(false);
      toast({
        title: 'Content saved',
        description: 'Changes saved successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Save failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleChange = (sectionKey: string, value: string) => {
    setContent((prev) => ({ ...prev, [sectionKey]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    const sections = pageSections[selectedPage] || [];
    sections.forEach((section) => {
      const value = content[section.key] || '';
      if (value) {
        updateMutation.mutate({ sectionKey: section.key, content: value });
      }
    });
  };

  const sections = pageSections[selectedPage] || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Content Management</h1>
        <p className="text-muted">Edit page content and text</p>
      </div>

      <Tabs value={selectedPage} onValueChange={setSelectedPage}>
        <TabsList className="grid w-full grid-cols-4">
          {pages.map((page) => (
            <TabsTrigger key={page.slug} value={page.slug}>
              {page.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map((page) => (
          <TabsContent key={page.slug} value={page.slug}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{page.name} Page Content</CardTitle>
                  <Button
                    onClick={handleSave}
                    disabled={!hasChanges || updateMutation.isPending}
                    className="rounded-xl bg-primary hover:bg-primary/90 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {updateMutation.isPending ? 'Saving...' : 'Save All Changes'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {isLoading ? (
                  <p className="text-center text-muted py-8">Loading content...</p>
                ) : (
                  sections.map((section) => (
                    <div key={section.key}>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {section.label}
                      </label>
                      {section.type === 'textarea' ? (
                        <Textarea
                          value={content[section.key] || ''}
                          onChange={(e) => handleChange(section.key, e.target.value)}
                          className="min-h-[120px]"
                          placeholder={`Enter ${section.label.toLowerCase()}...`}
                        />
                      ) : (
                        <input
                          type="text"
                          value={content[section.key] || ''}
                          onChange={(e) => handleChange(section.key, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder={`Enter ${section.label.toLowerCase()}...`}
                        />
                      )}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

