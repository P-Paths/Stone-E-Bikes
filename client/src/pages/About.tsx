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

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      bio: 'Avid cyclist with 15+ years in the bike industry.',
    },
    {
      name: 'Mike Chen',
      role: 'Head Mechanic',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      bio: 'Expert bike technician specializing in high-performance builds.',
    },
    {
      name: 'Emma Davis',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      bio: 'Dedicated to ensuring every customer finds their perfect ride.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16" data-testid="about-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
              About {theme.brandName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-about-intro">
              We're passionate cyclists on a mission to provide the best bikes and gear to help 
              everyone discover the joy of cycling. Since our founding, we've been committed to 
              quality, community, and sustainable transportation.
            </p>
          </div>
        </div>
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
                  Founded in 2015 by a group of cycling enthusiasts, {theme.brandName} started as a 
                  small local bike shop with a big dream: to make high-quality bicycles accessible 
                  to everyone.
                </p>
                <p data-testid="text-story-paragraph-2">
                  Over the years, we've grown from a single storefront to a trusted online retailer, 
                  but our core values remain the same. We believe that cycling is more than just 
                  transportation—it's a lifestyle, a passion, and a way to connect with our community 
                  and environment.
                </p>
                <p data-testid="text-story-paragraph-3">
                  Today, we're proud to serve thousands of customers worldwide, offering everything 
                  from entry-level bikes to professional racing machines. Every bike we sell comes 
                  with our commitment to quality and our promise of excellent customer service.
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

      {/* Our Team */}
      <section className="py-16 bg-white" data-testid="our-team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-team-title">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted" data-testid="text-team-description">
              The passionate people behind {theme.brandName}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-team-${index}`}>
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    data-testid={`img-team-${index}`}
                  />
                  <h3 className="text-lg font-semibold text-primary mb-1" data-testid={`text-team-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3" data-testid={`text-team-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-muted text-sm" data-testid={`text-team-bio-${index}`}>
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-white" data-testid="statistics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-customers">
              <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div data-testid="stat-bikes">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-300">Bikes Sold</div>
            </div>
            <div data-testid="stat-experience">
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div data-testid="stat-rating">
              <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
              <div className="text-gray-300">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
