"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface BikeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bike: any;
}

export const BikeDetailsModal: React.FC<BikeDetailsModalProps> = ({ isOpen, onClose, bike }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const product = {
      id: bike.id,
      name: bike.label,
      price: bike.priceMonthly.toString(),
      description: bike.features.join(', '),
      imageUrl: `/images/e-bikes/${bike.id}.png`,
      inStock: true,
      featured: false,
      slug: bike.id,
      categoryId: null,
      specifications: null,
      createdAt: null
    };
    
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${bike.label} has been added to your cart.`,
    });
    onClose();
  };

  if (!bike) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-accent shadow-2xl">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold text-primary">
              {bike.label}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative">
            <img
              src={`/images/e-bikes/${bike.id}.png`}
              alt={bike.label}
              className="w-full h-80 object-contain bg-gray-100 rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-accent text-black font-bold px-3 py-1 rounded-full text-xs shadow-lg border border-white">
              ⚡ Electric
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Key Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Key Specifications</h3>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-accent">Motor:</span>
                  <div className="text-muted">{bike.specifications.motor}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-accent">Battery:</span>
                  <div className="text-muted">{bike.specifications.battery}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-accent">Range:</span>
                  <div className="text-muted">{bike.specifications.range}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-accent">Max Speed:</span>
                  <div className="text-muted">{bike.specifications.maxSpeed}</div>
                </div>
              </div>
            </div>

            {/* Frame & Geometry */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Frame & Geometry</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-accent">Frame:</span>
                  <div className="text-muted">{bike.specifications.frame}</div>
                </div>
                <div>
                  <span className="font-semibold text-accent">Wheels:</span>
                  <div className="text-muted">{bike.specifications.wheelSize}</div>
                </div>
                <div>
                  <span className="font-semibold text-accent">Brakes:</span>
                  <div className="text-muted">{bike.specifications.brakes}</div>
                </div>
                <div>
                  <span className="font-semibold text-accent">Geometry:</span>
                  <div className="text-muted">{bike.specifications.geometry}</div>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Included Accessories</h3>
              <div className="text-sm text-muted">
                {bike.specifications.accessories}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">Pricing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Price:</span>
                  <span className="text-2xl font-bold text-primary">${bike.priceMonthly.toLocaleString()}</span>
                </div>
                {bike.specifications.bulkPrice && (
                  <div className="flex justify-between text-green-600">
                    <span className="font-semibold">Bulk Discount:</span>
                    <span className="font-bold">${bike.specifications.bulkPrice.toLocaleString()}</span>
                  </div>
                )}
                {bike.specifications.premiumPrice && (
                  <div className="flex justify-between text-blue-600">
                    <span className="font-semibold">Premium Package:</span>
                    <span className="font-bold">${bike.specifications.premiumPrice.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1 bg-accent hover:bg-yellow-600 text-black font-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-black"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
