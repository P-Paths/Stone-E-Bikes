"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export const CartNotification: React.FC = () => {
  const { showNotification, notificationMessage } = useCart();

  if (!showNotification) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right-2 duration-300">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium">{notificationMessage}</span>
      </div>
    </div>
  );
};
