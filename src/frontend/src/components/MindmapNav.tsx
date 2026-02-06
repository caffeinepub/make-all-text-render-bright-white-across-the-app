import { Link } from '@tanstack/react-router';
import { GraduationCap, Compass, Video, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function MindmapNav() {
  const steps = [
    {
      number: 1,
      title: 'Career Quiz',
      description: 'Discover your ideal career path',
      icon: GraduationCap,
      path: '/career-quiz',
      color: 'from-chart-1/20 to-chart-1/5',
    },
    {
      number: 2,
      title: 'Explore Careers',
      description: 'Browse 100+ career options',
      icon: Compass,
      path: '/explore-careers',
      color: 'from-chart-2/20 to-chart-2/5',
    },
    {
      number: 3,
      title: 'Professionals in the Field',
      description: 'Watch career insights from experts',
      icon: Video,
      path: '/videos',
      color: 'from-chart-3/20 to-chart-3/5',
    },
    {
      number: 4,
      title: 'Mentor Connections',
      description: 'Connect with experienced mentors',
      icon: Users,
      path: '/mentors',
      color: 'from-chart-4/20 to-chart-4/5',
    },
    {
      number: 5,
      title: 'Resources',
      description: 'Templates and guides for success',
      icon: BookOpen,
      path: '/resources',
      color: 'from-chart-5/20 to-chart-5/5',
    },
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Connection Lines */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Link key={step.number} to={step.path}>
              <Card
                className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardContent className="relative pt-6 pb-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">
                      Step {step.number}
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{step.title}</h3>
                    <p className="text-sm text-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
