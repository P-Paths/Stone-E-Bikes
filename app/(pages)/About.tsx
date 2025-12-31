'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

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
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Stone E-Bikes was founded in 2023 with a clear vision: to revolutionize electric mobility by creating transportation solutions that are accessible, safe, and sustainable. As a Black minority-owned business based in Detroit, we're deeply committed to building the future of mobility in the Motor City and beyond.
            </p>
            <p>
              Our journey began with recognizing a critical gap in the electric mobility market. While traditional e-bikes offer many benefits, they present challenges for many users, particularly around balance, stability, and accessibility. We saw an opportunity to create something fundamentally different—a quad-cycle platform that addresses these limitations while maintaining the efficiency and environmental benefits of electric power.
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
              Being based in Detroit is central to our identity. The Motor City has a rich history of automotive innovation, and we're proud to be part of the next chapter in that story. Detroit's legacy of manufacturing excellence, combined with its spirit of resilience and innovation, informs everything we do.
            </p>
            <p>
              We're building our platform with deep respect for Detroit's automotive heritage while embracing the future of sustainable transportation. Our commitment to the city extends beyond our business—we're actively engaged in the community and dedicated to creating opportunities for local talent and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Mission & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Our mission is to create accessible, safe, and environmentally responsible transportation solutions that serve communities across America. We believe that mobility is a fundamental right, and our quad-cycle platform is designed to make electric transportation available to everyone, regardless of age, ability, or experience level.
            </p>
            <p>
              We're committed to sustainability not just in our products, but in our entire approach—from manufacturing processes to community partnerships. Every decision we make is guided by our core values: innovation, accessibility, safety, and community impact.
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
            We're always looking for partners, investors, and community members who share our vision for the future of mobility.
          </p>
          <Link href="/contact">
            <Button className="rounded-xl bg-white border-2 border-primary text-primary hover:bg-accent hover:text-primary px-8 py-3 text-lg font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
