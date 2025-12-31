'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="bg-white w-full" style={{ minHeight: 'calc(100vh - 200px)' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            Stone E-Bikes
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Revolutionizing electric mobility with our innovative quad-cycle platform
          </p>
          <Link href="/contact">
            <Button 
              className="rounded-xl border-2 px-8 py-3 text-lg font-semibold"
              style={{ 
                backgroundColor: 'white',
                borderColor: '#000000',
                color: '#000000'
              }}
            >
              Request a Conversation
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Innovation</h2>
            <p style={{ color: '#6B7280' }}>
              Pioneering the future of electric mobility with our four-wheel quad-cycle platform designed for safety, stability, and sustainability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Detroit Roots</h2>
            <p style={{ color: '#6B7280' }}>
              Born in the Motor City, we're building the next generation of electric mobility solutions with deep respect for Detroit's automotive heritage.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Partnership</h2>
            <p style={{ color: '#6B7280' }}>
              We're seeking strategic partnerships and pilot programs to bring our quad-cycle platform to communities and organizations nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr style={{ borderTop: '2px solid #000000' }} />
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#000000' }}>Our Mission</h2>
          <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
            Stone E-Bikes is developing a revolutionary quad-cycle mobility platform that combines the stability of four wheels with the efficiency and sustainability of electric power. Our mission is to create accessible, safe, and environmentally responsible transportation solutions for communities across America.
          </p>
          <Link href="/platform">
            <Button 
              className="rounded-xl border-2 px-8 py-3 text-lg font-semibold"
              style={{ 
                backgroundColor: 'white',
                borderColor: '#000000',
                color: '#000000'
              }}
            >
              Learn About Our Platform
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
