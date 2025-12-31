"use client";

import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Support() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Customer Support
          </h1>
          <p className="text-xl text-muted">
            We're here to help with all your e-bike questions and needs
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Email Support</p>
                      <p className="text-muted">info@stonee-bikes.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Phone Support</p>
                      <p className="text-muted">(555) 123-BIKE</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-muted">123 Bike Street, Cycling City, CC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-muted">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
                  <p className="text-sm text-muted">
                    We typically respond to emails within 2-4 hours during business hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">How We Can Help</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary">Product Questions</h3>
                    <p className="text-sm text-muted">Help choosing the right e-bike, sizing, features, and specifications</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Technical Support</h3>
                    <p className="text-sm text-muted">Battery issues, motor problems, assembly questions, and maintenance</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Order Support</h3>
                    <p className="text-sm text-muted">Order status, shipping updates, payment questions, and returns</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary">Warranty Claims</h3>
                    <p className="text-sm text-muted">Warranty coverage, repair services, and replacement parts</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Accessories</h3>
                    <p className="text-sm text-muted">Compatible accessories, installation help, and recommendations</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Safety & Training</h3>
                    <p className="text-sm text-muted">Safety tips, riding instructions, and local regulations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Before You Contact Us</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Quick Solutions</h3>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>• Check our <a href="/size-guide" className="underline">Size Guide</a> for fitting questions</p>
                    <p>• Review our <a href="/shipping-info" className="underline">Shipping Information</a> for delivery updates</p>
                    <p>• Read our <a href="/returns" className="underline">Return Policy</a> for return questions</p>
                    <p>• Browse our <a href="/blog" className="underline">Blog</a> for maintenance tips and guides</p>
                  </div>
                </div>
                <p className="text-muted">
                  Having your order number ready will help us assist you faster. 
                  For technical issues, please include photos or videos if possible.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <p className="text-muted">
                  Ready to get help? Choose your preferred contact method:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-accent hover:bg-yellow-600 text-black"
                    onClick={() => window.location.href = 'mailto:info@stonee-bikes.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.location.href = 'tel:(555)123-BIKE'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
