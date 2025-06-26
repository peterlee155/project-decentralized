'use client';

import { 
  Palette, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Creative Portfolio',
    description: 'Showcase your work with stunning, customizable portfolio layouts that make your creativity shine.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Users,
    title: 'Creator Network',
    description: 'Connect with like-minded creators, find collaborators, and build meaningful professional relationships.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Analytics Dashboard',
    description: 'Track your growth, understand your audience, and make data-driven decisions to boost your reach.',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your work is protected with enterprise-grade security, watermarking, and rights management.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Zap,
    title: 'AI-Powered Tools',
    description: 'Leverage cutting-edge AI to enhance your workflow, generate ideas, and optimize your content.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Reach audiences worldwide with multi-language support and international monetization options.',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed as a creator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From portfolio management to global distribution, CreatorHub provides 
            all the tools you need to turn your passion into a thriving business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
              
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}