'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Platform() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8">Quad-Cycle Mobility Platform</h1>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Platform Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Platform Overview</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Our quad-cycle mobility platform represents a fundamental shift in electric transportation design. By utilizing four wheels instead of two, we've created a vehicle that offers superior stability, safety, and accessibility compared to traditional e-bikes.
            </p>
            <p>
              The platform is designed to serve a wide range of applications, from personal mobility and last-mile delivery to community transportation and recreational use. Our quad-cycle design eliminates the balance challenges of two-wheel vehicles while maintaining the efficiency and environmental benefits of electric power.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Key Features</h2>
          <ul className="space-y-4 text-muted text-lg list-disc list-inside">
            <li>Four-wheel stability eliminates balance concerns</li>
            <li>Electric powertrain for zero-emission operation</li>
            <li>Designed for accessibility across age groups and abilities</li>
            <li>Modular platform adaptable to various use cases</li>
            <li>Built with durability and reliability in mind</li>
            <li>Sustainable manufacturing and materials</li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Platform Applications</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Our quad-cycle platform is designed to serve multiple markets and use cases:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal mobility and commuting</li>
              <li>Last-mile delivery and logistics</li>
              <li>Community transportation programs</li>
              <li>Recreational and tourism applications</li>
              <li>Accessibility-focused mobility solutions</li>
            </ul>
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
          <h2 className="text-2xl font-bold text-primary mb-4">Interested in Learning More?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Contact us to discuss partnership opportunities, pilot programs, or investment inquiries.
          </p>
          <Link href="/contact">
            <Button className="rounded-xl bg-white border-2 border-primary text-primary hover:bg-accent hover:text-primary px-8 py-3 text-lg font-semibold">
              Request a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

