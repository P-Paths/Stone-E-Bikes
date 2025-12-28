'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../../client/src/components/ui/button';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8">About Stone E-Bikes</h1>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Founder Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Founder-Led Story</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Stone E-Bikes was founded with a vision to transform electric mobility through innovation, accessibility, and community impact. Our founder, Preston Jordan Jr., recognized the need for a more stable, safe, and sustainable transportation solution that could serve diverse communities.
            </p>
            <p>
              Drawing from Detroit's rich automotive heritage and the city's spirit of innovation, we set out to develop a quad-cycle platform that addresses the limitations of traditional two-wheel electric bikes while maintaining the environmental benefits of electric mobility.
            </p>
            <p>
              Our commitment extends beyond product development—we're building partnerships with communities, organizations, and forward-thinking leaders who share our vision of accessible, sustainable transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Detroit Roots */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Detroit Roots</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Detroit is more than our home—it's our inspiration. The Motor City's legacy of automotive innovation runs deep, and we're proud to contribute to the next chapter of mobility evolution.
            </p>
            <p>
              Our roots in Detroit inform our approach to manufacturing, community engagement, and sustainable business practices. We understand the importance of creating opportunities, supporting local communities, and building products that serve real needs.
            </p>
            <p>
              As a Detroit-based company, we're committed to creating jobs, fostering innovation, and demonstrating that the future of mobility can be built right here in the heart of America's automotive capital.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Join Us on This Journey</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            We're looking for partners, investors, and community leaders who share our vision for the future of electric mobility.
          </p>
          <Link href="/contact">
            <Button className="rounded-xl bg-white border-2 border-primary text-primary hover:bg-accent hover:text-primary px-8 py-3 text-lg font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
