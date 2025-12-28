import { NextResponse } from 'next/server';
import { MockStorage } from '../../../server/mock-storage';

const storage = new MockStorage();

export async function GET() {
  const posts = await storage.getPublishedBlogPosts();
  return NextResponse.json(posts);
}


