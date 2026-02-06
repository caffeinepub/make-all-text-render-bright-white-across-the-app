import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, UserPlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useListMentors, useCreateMentor } from '../hooks/useMentors';
import AnimatedSection from '../components/AnimatedSection';
import { toast } from 'sonner';

export default function MentorConnectionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    qualifications: '',
  });

  const { data: mentors = [], isLoading } = useListMentors(searchTerm);
  const createMentor = useCreateMentor();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.qualifications) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await createMentor.mutateAsync(formData);
      toast.success('Mentor profile created successfully!');
      setFormData({ name: '', contactInfo: '', qualifications: '' });
    } catch (error) {
      toast.error('Failed to create mentor profile');
    }
  };

  return (
    <div className="container py-16">
      <AnimatedSection>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Mentor Connections</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced mentors or become one yourself
          </p>
        </div>
      </AnimatedSection>

      <Tabs defaultValue="find" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="find">Find Mentors</TabsTrigger>
          <TabsTrigger value="become">Become a Mentor</TabsTrigger>
        </TabsList>

        <TabsContent value="find" className="space-y-6 mt-6">
          <AnimatedSection>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search mentors by name or qualifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </AnimatedSection>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : mentors.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground">
                  {searchTerm ? 'No mentors found matching your search.' : 'No mentors available yet. Be the first to sign up!'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {mentors.map((mentor) => (
                <AnimatedSection key={Number(mentor.id)}>
                  <Link to="/mentors/$mentorId" params={{ mentorId: String(mentor.id) }}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xl">👤</span>
                          </div>
                          {mentor.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold">Qualifications:</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            {mentor.qualifications}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Click to view contact info
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="become" className="mt-6">
          <AnimatedSection>
            <Card className="max-w-2xl mx-auto border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-6 w-6" />
                  Sign Up as a Mentor
                </CardTitle>
                <CardDescription>
                  Share your experience and help students navigate their career journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactInfo">Email or Contact Number *</Label>
                    <Input
                      id="contactInfo"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      placeholder="your.email@example.com or +1234567890"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualifications">Qualifications & Experience *</Label>
                    <textarea
                      id="qualifications"
                      value={formData.qualifications}
                      onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                      placeholder="Describe your education, profession, and areas of expertise..."
                      className="w-full min-h-32 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={createMentor.isPending}
                  >
                    {createMentor.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Profile...
                      </>
                    ) : (
                      'Create Mentor Profile'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </TabsContent>
      </Tabs>
    </div>
  );
}
