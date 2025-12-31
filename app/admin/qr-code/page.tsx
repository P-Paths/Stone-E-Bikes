'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Download, QrCode } from 'lucide-react';

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('https://stonybikes.com');
  const [size, setSize] = useState(256);
  const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');

  const handleDownload = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;

    try {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size + 32; // Add margin
        canvas.height = size + 32;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 16, 16, size, size);
          
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const downloadLink = document.createElement('a');
              downloadLink.download = `qrcode-${Date.now()}.png`;
              downloadLink.href = url;
              downloadLink.click();
              URL.revokeObjectURL(url);
            }
          }, 'image/png');
        }
        
        URL.revokeObjectURL(svgUrl);
      };
      
      img.src = svgUrl;
    } catch (error) {
      console.error('Error downloading QR code:', error);
      alert('Error downloading QR code. Please try again.');
    }
  };

  const presetUrls = [
    { label: 'Homepage', value: 'https://stonybikes.com' },
    { label: 'Contact', value: 'https://stonybikes.com/contact' },
    { label: 'Platform', value: 'https://stonybikes.com/platform' },
    { label: 'Partnerships', value: 'https://stonybikes.com/partnerships' },
    { label: 'About', value: 'https://stonybikes.com/about' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">QR Code Generator</h1>
        <p className="text-muted">Generate QR codes for your website URLs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <QrCode className="w-5 h-5" />
              <span>Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* URL Input */}
            <div className="space-y-2">
              <Label htmlFor="url">URL or Text</Label>
              <Input
                id="url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://stonybikes.com"
              />
            </div>

            {/* Preset URLs */}
            <div className="space-y-2">
              <Label>Quick Links</Label>
              <div className="grid grid-cols-2 gap-2">
                {presetUrls.map((preset) => (
                  <Button
                    key={preset.value}
                    variant="outline"
                    size="sm"
                    onClick={() => setUrl(preset.value)}
                    className="text-xs"
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Size Slider */}
            <div className="space-y-2">
              <Label htmlFor="size">Size: {size}px</Label>
              <Input
                id="size"
                type="range"
                min="128"
                max="512"
                step="32"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>128px</span>
                <span>512px</span>
              </div>
            </div>

            {/* Error Correction Level */}
            <div className="space-y-2">
              <Label htmlFor="level">Error Correction Level</Label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="L">Low (7%)</option>
                <option value="M">Medium (15%)</option>
                <option value="Q">Quartile (25%)</option>
                <option value="H">High (30%)</option>
              </select>
              <p className="text-xs text-muted">
                Higher levels allow more damage before the QR code becomes unreadable
              </p>
            </div>

            {/* Download Button */}
            <Button onClick={handleDownload} className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download QR Code
            </Button>
          </CardContent>
        </Card>

        {/* Preview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg min-h-[400px]">
              {url ? (
                <div className="flex flex-col items-center space-y-4">
                  <div
                    className="bg-white p-4 rounded-lg shadow-sm"
                    style={{ width: size, height: size }}
                  >
                    <QRCodeSVG
                      id="qr-code-svg"
                      value={url}
                      size={size}
                      level={level}
                      includeMargin={true}
                    />
                  </div>
                  <div className="text-center max-w-xs">
                    <p className="text-sm font-medium text-primary break-all">{url}</p>
                    <p className="text-xs text-muted mt-2">
                      Scan with any QR code reader
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted">
                  <QrCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter a URL to generate a QR code</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Use QR codes on business cards, flyers, and marketing materials</li>
            <li>• Higher error correction levels are better for printed materials</li>
            <li>• Test your QR code before printing large quantities</li>
            <li>• Make sure the URL is accessible and mobile-friendly</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

