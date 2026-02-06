import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, Video as VideoIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useListVideos, useSubmitVideo } from '../hooks/useVideos';
import AnimatedSection from '../components/AnimatedSection';
import { toast } from 'sonner';

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    qualifications: '',
    videoUrl: '',
  });

  const { data: videos = [], isLoading } = useListVideos(searchTerm);
  const submitVideo = useSubmitVideo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.qualifications || !formData.videoUrl) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitVideo.mutateAsync(formData);
      toast.success('Video submitted successfully!');
      setFormData({ name: '', qualifications: '', videoUrl: '' });
    } catch (error) {
      toast.error('Failed to submit video');
    }
  };

  return (
    <div className="container py-16">
      <AnimatedSection>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Professionals in the Field</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch career insights and advice from experienced professionals
          </p>
        </div>
      </AnimatedSection>

      <Tabs defaultValue="watch" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="watch">Watch Videos</TabsTrigger>
          <TabsTrigger value="submit">Submit Video</TabsTrigger>
        </TabsList>

        <TabsContent value="watch" className="space-y-6 mt-6">
          <AnimatedSection>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search videos by name or qualifications..."
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
          ) : videos.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground">
                  {searchTerm ? 'No videos found matching your search.' : 'No videos available yet. Be the first to share!'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <AnimatedSection key={Number(video.id)}>
                  <Link to="/videos/$videoId" params={{ videoId: String(video.id) }}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <div className="w-full aspect-video bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                          <VideoIcon className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{video.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold">Qualifications:</span>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {video.qualifications}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Click to watch
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="submit" className="mt-6">
          <AnimatedSection>
            <Card className="max-w-2xl mx-auto border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <VideoIcon className="h-6 w-6" />
                  Submit Your Video
                </CardTitle>
                <CardDescription>
                  Share your career journey and insights with students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualifications">Qualifications & Profession *</Label>
                    <textarea
                      id="qualifications"
                      value={formData.qualifications}
                      onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                      placeholder="Describe your education, profession, and expertise..."
                      className="w-full min-h-24 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video URL *</Label>
                    <Input
                      id="videoUrl"
                      type="url"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                      placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Paste a link to your video on YouTube, Vimeo, or another platform
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitVideo.isPending}
                  >
                    {submitVideo.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Video'
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
