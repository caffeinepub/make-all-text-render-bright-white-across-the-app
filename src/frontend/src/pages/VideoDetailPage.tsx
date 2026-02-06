import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetVideo } from '../hooks/useVideos';
import SafeVideoEmbed from '../components/SafeVideoEmbed';
import AnimatedSection from '../components/AnimatedSection';

export default function VideoDetailPage() {
  const { videoId } = useParams({ from: '/videos/$videoId' });
  const { data: video, isLoading, error } = useGetVideo(BigInt(videoId));

  if (isLoading) {
    return (
      <div className="container py-16 flex justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="container py-16">
        <Card className="max-w-2xl mx-auto text-center py-12">
          <CardContent>
            <p className="text-muted-foreground mb-4">Video not found</p>
            <Link to="/videos">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Videos
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <AnimatedSection>
          <Link to="/videos">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Videos
            </Button>
          </Link>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl">{video.name}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Uploaded {new Date(Number(video.created) / 1000000).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <SafeVideoEmbed url={video.videoUrl} />

              <div>
                <h3 className="font-semibold text-lg mb-2">About the Professional</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {video.qualifications}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Open in New Tab
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
