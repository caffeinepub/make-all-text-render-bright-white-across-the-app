import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, Mail, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetMentor } from '../hooks/useMentors';
import AnimatedSection from '../components/AnimatedSection';

export default function MentorProfilePage() {
  const { mentorId } = useParams({ from: '/mentors/$mentorId' });
  const { data: mentor, isLoading, error } = useGetMentor(BigInt(mentorId));

  if (isLoading) {
    return (
      <div className="container py-16 flex justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !mentor) {
    return (
      <div className="container py-16">
        <Card className="max-w-2xl mx-auto text-center py-12">
          <CardContent>
            <p className="text-muted-foreground mb-4">Mentor not found</p>
            <Link to="/mentors">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Mentors
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isEmail = mentor.contactInfo.includes('@');
  const isPhone = /^\+?[\d\s\-()]+$/.test(mentor.contactInfo);

  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <AnimatedSection>
          <Link to="/mentors">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Mentors
            </Button>
          </Link>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">👤</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">{mentor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Mentor since {new Date(Number(mentor.created) / 1000000).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Qualifications & Experience</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {mentor.qualifications}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {isEmail ? (
                    <a href={`mailto:${mentor.contactInfo}`}>
                      <Button className="w-full gap-2" size="lg">
                        <Mail className="h-5 w-5" />
                        Send Email
                      </Button>
                    </a>
                  ) : isPhone ? (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Phone Number</p>
                        <p className="text-lg">{mentor.contactInfo}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Contact</p>
                        <p className="text-lg">{mentor.contactInfo}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
