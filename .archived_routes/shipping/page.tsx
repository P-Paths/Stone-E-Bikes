'use client';

import React from 'react';

export default function Shipping() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Shipping Information</h1>
          
          <div className="space-y-8 text-lg text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Processing Time</h2>
              <p>All orders are processed within <strong>1-2 business days</strong> (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
              <p className="mt-2">During peak seasons or promotional periods, processing times may be slightly longer. We appreciate your patience.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Shipping Rates & Delivery Estimates</h2>
              <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Standard Shipping (3-7 business days):</strong> Free for orders over $500, otherwise $25.00</li>
                <li><strong>Expedited Shipping (2-3 business days):</strong> $75.00</li>
                <li><strong>Overnight Shipping (1 business day):</strong> $150.00</li>
              </ul>
              <p className="mt-2">Delivery estimates are from the time of shipment, not from the time of order placement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Local Pickup</h2>
              <p>You can skip the shipping fees with free local pickup at our store located at:</p>
              <address className="not-italic mt-2">
                <strong>Stone E-Bikes</strong><br/>
                15151 W 8 Mile<br/>
                Detroit, Michigan<br/>
                United States
              </address>
              <p className="mt-2">After placing your order and selecting local pickup at checkout, your order will be prepared and ready for pick up within 1 business day. We will send you an email when your order is ready along with instructions.</p>
              <p className="mt-2">Our in-store pickup hours are Monday-Friday from 9AM to 7PM, Saturday-Sunday from 9AM to 6PM. Please have your order confirmation email with you when you come to collect your order.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">How do I check the status of my order?</h2>
              <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
              <p className="mt-2">If you haven't received your order within 10 days of receiving your shipping confirmation email, please contact us at <a href="tel:+15551234567" className="text-secondary hover:underline">313-495-2887</a> or <a href="mailto:info@stonee-bikes.com" className="text-secondary hover:underline">info@stonee-bikes.com</a> with your name and order number, and we will look into it for you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


