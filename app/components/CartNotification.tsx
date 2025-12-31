"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export const CartNotification: React.FC = () => {
  const { showNotification, notificationMessage } = useCart();

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-right-2 duration-300">
      <div className="bg-accent text-black px-6 py-4 rounded-lg shadow-xl border-2 border-white flex items-center space-x-3 max-w-sm font-semibold">
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium">{notificationMessage}</span>
      </div>
    </div>
  );
};
