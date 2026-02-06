import { Link } from '@tanstack/react-router';
import { GraduationCap, Compass, Video, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '../components/AnimatedSection';
import MindmapNav from '../components/MindmapNav';

export default function HomePage() {
  const counsellors = [
    { name: 'Mr. Maxim Lobo', email: 'maxim@greenwoodhigh.edu.in' },
    { name: 'Ms. Dakshayani Selvarajan', email: 'dakshayanis@greenwoodhigh.edu.in' },
    { name: 'Ms. Anitha Subramanian', email: 'anithas@greenwoodhigh.edu.in' },
  ];

  const opportunities = [
    'Early career exploration from Grade 9 onwards, delivered through a progressive curriculum that supports informed subject choices and long-term university planning.',
    'The school serves as an authorised SAT test centre to provide convenient and supported testing opportunities to students',
    'Personal statement and essay-writing workshops, which are designed to help students craft authentic and engaging application essays.',
    'Targeted workshops covering profile development, community service initiatives, research opportunities, internships, and enrichment programmes.',
    'University application planning, in terms of courses and colleges',
    'Exclusive opportunities to engage with university representatives from universities around the globe, guest speakers, professors, and professionals, in university fairs, workshops, and masterclasses.',
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent" />
        <div className="container relative">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Discover your Future
              </h1>
              <p className="text-xl md:text-2xl text-foreground">
                A platform for all your career counselling needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mindmap Navigation */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Your Journey Starts Here</h2>
            <MindmapNav />
          </AnimatedSection>
        </div>
      </section>

      {/* University Preparation */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">University Preparation at Greenwood High</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground">
                <p>
                  At Greenwood High, preparation for university begins as early as Grade 8, enabling
                  students to make informed and strategic choices moving forward. Additionally, this
                  helps them make appropriate subject choices as they enter the IGCSE programme in
                  Grade 9-10. Our university counselling team works closely with students through
                  this process, helping them develop a coherent and personalised pathway to higher
                  education.
                </p>
                <p>
                  The counselling team strives to guide students in building a strong profile that
                  balances academic rigour, leadership, extracurricular involvement, and meaningful
                  service - the key components of successful and competitive university applications.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Opportunities & Guidance */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">Opportunities & Guidance Provided</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-foreground font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-foreground">{opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Counsellors */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Contact the Counsellors</h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {counsellors.map((counsellor, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{counsellor.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${counsellor.email}`}
                      className="text-sm text-foreground hover:underline break-all"
                    >
                      {counsellor.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
