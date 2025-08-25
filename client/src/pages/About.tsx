import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const theme = useTheme();

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the highest quality bikes and components from trusted manufacturers worldwide.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building a strong cycling community through events, workshops, and shared experiences.',
    },
    {
      icon: Globe,
      title: 'Sustainable Future',
      description: 'Promoting eco-friendly transportation and supporting environmental initiatives.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Our team consists of cycling enthusiasts who live and breathe bikes.',
    },
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16" data-testid="about-hero-section">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
              About {theme.brandName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-about-intro">
              We're passionate about electric mobility and helping everyone discover the freedom of e-bikes. 
              From seniors seeking comfortable transportation to adventure seekers exploring new terrain, 
              we provide premium electric bicycles that enhance your lifestyle and independence.
            </p>
          </div>
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")'
          }}
        ></div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white" data-testid="our-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" data-testid="text-our-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-muted">
                <p data-testid="text-story-paragraph-1">
                  Founded in 2023 by a black minority-owned business, {theme.brandName} started with a 
                  vision: to make premium electric bicycles accessible to everyone, especially seniors and 
                  those seeking alternative transportation.
                </p>
                <p data-testid="text-story-paragraph-2">
                  Born and raised in Detroit, we understand the importance of reliable, affordable transportation. 
                  We recognized that many people, particularly seniors, were looking for comfortable, 
                  safe, and reliable transportation options. Our e-bikes provide the perfect solution—combining 
                  the freedom of cycling with the assistance of electric power for a truly enjoyable experience.
                </p>
                <p data-testid="text-story-paragraph-3">
                  Today, we're proud to serve customers of all ages and abilities, from seniors enjoying 
                  leisurely rides to adventure seekers exploring new terrain. Every e-bike we sell comes 
                  with our commitment to safety, quality, and exceptional customer support.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Bike shop interior"
                className="rounded-lg shadow-lg"
                data-testid="img-our-story"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Audiences */}
      <section className="py-16 bg-gray-50" data-testid="our-audiences-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-audiences-title">
              Designed for Everyone
            </h2>
            <p className="text-xl text-muted" data-testid="text-audiences-description">
              Our e-bikes are designed to serve diverse needs and lifestyles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="card-audience-seniors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👴</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid="text-audience-seniors-title">
                  Seniors & Comfort Seekers
                </h3>
                <p className="text-muted text-sm" data-testid="text-audience-seniors-description">
                  Our trikes and comfort-focused e-bikes provide stability, ease of use, and gentle assistance 
                  for those who want to maintain independence and enjoy outdoor activities safely.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="card-audience-commuters">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚴</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid="text-audience-commuters-title">
                  Urban Commuters
                </h3>
                <p className="text-muted text-sm" data-testid="text-audience-commuters-description">
                  Perfect for daily commuting with cargo capacity for groceries, work essentials, and 
                  reliable performance for consistent transportation needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="card-audience-adventurers">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid="text-audience-adventurers-title">
                  Adventure Seekers
                </h3>
                <p className="text-muted text-sm" data-testid="text-audience-adventurers-description">
                  Fat tire e-bikes designed for off-road exploration, beach rides, and challenging terrain 
                  with powerful motors and durable construction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="card-audience-families">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid="text-audience-families-title">
                  Families & Recreation
                </h3>
                <p className="text-muted text-sm" data-testid="text-audience-families-description">
                  Safe, comfortable e-bikes perfect for family outings, leisurely rides, and creating 
                  lasting memories together in the great outdoors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="card-audience-business">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid="text-audience-business-title">
                  Business & Delivery
                </h3>
                <p className="text-muted text-sm" data-testid="text-audience-business-description">
                  Cargo e-bikes and trikes ideal for small business deliveries, food service, and 
                  professional use with reliable performance and ample storage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="card-audience-health">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" data-testid="text-audience-health-title">
                  Health & Wellness
                </h3>
                <p className="text-muted text-sm" data-testid="text-audience-health-description">
                  Low-impact exercise option that promotes cardiovascular health, joint mobility, and 
                  mental well-being for riders of all fitness levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50" data-testid="our-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-values-title">
              Our Values
            </h2>
            <p className="text-xl text-muted" data-testid="text-values-description">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-3" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
