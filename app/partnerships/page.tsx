'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Partnerships() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#004225' }}>Partnerships & Pilot Opportunities</h1>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr style={{ borderTop: '2px solid #004225' }} />
      </div>

      {/* Partnership Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#004225' }}>Partnership Opportunities</h2>
          <div className="space-y-4 text-lg" style={{ color: '#6B7280' }}>
            <p>
              Stone E-Bikes is actively seeking strategic partnerships to bring our quad-cycle mobility platform to market. We're looking for organizations, communities, and investors who share our vision for sustainable, accessible transportation.
            </p>
            <p>
              Our partnership model is designed to create mutual value through pilot programs, joint development initiatives, and collaborative market entry strategies. We believe in building long-term relationships that benefit all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr style={{ borderTop: '2px solid #004225' }} />
      </div>

      {/* Pilot Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#004225' }}>Pilot Programs</h2>
          <div className="space-y-4 text-lg" style={{ color: '#6B7280' }}>
            <p>
              We're launching pilot programs to demonstrate the value and versatility of our quad-cycle platform. Pilot opportunities are available for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Municipal transportation initiatives</li>
              <li>Corporate campus mobility programs</li>
              <li>University and educational institution partnerships</li>
              <li>Tourism and recreation organizations</li>
              <li>Delivery and logistics companies</li>
              <li>Community-based mobility services</li>
            </ul>
            <p className="mt-4">
              Pilot programs include comprehensive support, training, and data collection to ensure successful implementation and valuable feedback for platform refinement.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr style={{ borderTop: '2px solid #004225' }} />
      </div>

      {/* Investment Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#004225' }}>Investment Opportunities</h2>
          <div className="space-y-4 text-lg" style={{ color: '#6B7280' }}>
            <p>
              Stone E-Bikes is seeking investors who are aligned with our mission and vision. We're building a company that combines innovation, sustainability, and community impact.
            </p>
            <p>
              Investment opportunities are available for strategic partners who can contribute not just capital, but also expertise, networks, and shared commitment to transforming electric mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr style={{ borderTop: '2px solid #004225' }} />
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#004225' }}>Let's Build the Future Together</h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Whether you're interested in partnerships, pilot programs, or investment opportunities, we'd love to start a conversation.
          </p>
          <Link href="/contact">
            <Button 
              className="rounded-xl border-2 px-8 py-3 text-lg font-semibold"
              style={{ 
                backgroundColor: 'white',
                borderColor: '#004225',
                color: '#004225'
              }}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

