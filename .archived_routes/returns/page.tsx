'use client';

import React from 'react';

export default function Returns() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Return Policy</h1>
          
          <div className="space-y-8 text-lg text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">30-Day Return Policy</h2>
              <p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>
              <p className="mt-2">To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">How to Initiate a Return</h2>
              <p>To start a return, you can contact us at <a href="mailto:returns@stonee-bikes.com" className="text-secondary hover:underline">returns@stonee-bikes.com</a>. If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p>
              <p className="mt-2">You can always contact us for any return question at <a href="tel:+15551234567" className="text-secondary hover:underline">313-495-2887</a> or <a href="mailto:info@stonee-bikes.com" className="text-secondary hover:underline">info@stonee-bikes.com</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Damages and Issues</h2>
              <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Exceptions / Non-returnable items</h2>
              <p>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>
              <p className="mt-2">Unfortunately, we cannot accept returns on sale items or gift cards.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Exchanges</h2>
              <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-accent mb-3">Refunds</h2>
              <p>We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
              <p className="mt-2">If more than 15 business days have passed since we've approved your return, please contact us at <a href="tel:+15551234567" className="text-secondary hover:underline">313-495-2887</a> or <a href="mailto:info@stonee-bikes.com" className="text-secondary hover:underline">info@stonee-bikes.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


