'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, MessageCircle, ExternalLink } from 'lucide-react';

const featuredCreators = [
  {
    id: 1,
    name: 'Sarah Chen',
    username: '@sarahdesigns',
    avatar: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    category: 'UI/UX Designer',
    followers: '12.5K',
    projects: [
      {
        title: 'Mobile Banking App',
        image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        likes: 342,
        views: 1200
      },
      {
        title: 'E-commerce Dashboard',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        likes: 289,
        views: 950
      }
    ]
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    username: '@marcusphoto',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    category: 'Photographer',
    followers: '8.3K',
    projects: [
      {
        title: 'Urban Landscapes',
        image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        likes: 567,
        views: 2100
      },
      {
        title: 'Portrait Series',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        likes: 423,
        views: 1680
      }
    ]
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    username: '@elenaart',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    category: 'Digital Artist',
    followers: '15.7K',
    projects: [
      {
        title: 'Fantasy Illustrations',
        image: 'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        likes: 892,
        views: 3200
      },
      {
        title: 'Character Design',
        image: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
        likes: 634,
        views: 2450
      }
    ]
  }
];

export function CreatorShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Discover amazing creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by the incredible work of our creator community. 
            From stunning designs to breathtaking photography, there's something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCreators.map((creator) => (
            <div key={creator.id} className="space-y-6">
              {/* Creator Profile Card */}
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{creator.name}</h3>
                      <p className="text-gray-600">{creator.username}</p>
                      <Badge variant="secondary" className="mt-1">
                        {creator.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{creator.followers}</span> followers
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Creator Projects */}
              <div className="space-y-4">
                {creator.projects.map((project, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{project.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{Math.floor(project.likes / 10)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
            Explore More Creators
          </Button>
        </div>
      </div>
    </section>
  );
}