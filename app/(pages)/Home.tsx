'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
            Stone E-Bikes
          </h1>
          <p className="text-xl lg:text-2xl text-muted mb-8 max-w-3xl mx-auto">
            Revolutionizing electric mobility with our innovative quad-cycle platform
          </p>
          <Link href="/contact">
            <Button className="rounded-xl bg-white border-2 border-primary text-primary hover:bg-accent hover:text-primary px-8 py-3 text-lg font-semibold">
              Request a Conversation
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Innovation</h2>
            <p className="text-muted">
              Pioneering the future of electric mobility with our four-wheel quad-cycle platform designed for safety, stability, and sustainability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Detroit Roots</h2>
            <p className="text-muted">
              Born in the Motor City, we're building the next generation of electric mobility solutions with deep respect for Detroit's automotive heritage.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Partnership</h2>
            <p className="text-muted">
              We're seeking strategic partnerships and pilot programs to bring our quad-cycle platform to communities and organizations nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-primary" />
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-muted mb-8">
            Stone E-Bikes is developing a revolutionary quad-cycle mobility platform that combines the stability of four wheels with the efficiency and sustainability of electric power. Our mission is to create accessible, safe, and environmentally responsible transportation solutions for communities across America.
          </p>
          <Link href="/platform">
            <Button className="rounded-xl bg-white border-2 border-primary text-primary hover:bg-accent hover:text-primary px-8 py-3 text-lg font-semibold">
              Learn About Our Platform
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
