interface SafeVideoEmbedProps {
  url: string;
}

export default function SafeVideoEmbed({ url }: SafeVideoEmbedProps) {
  const getEmbedUrl = (url: string): string | null => {
    try {
      const urlObj = new URL(url);

      // YouTube
      if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
        let videoId = '';
        if (urlObj.hostname.includes('youtu.be')) {
          videoId = urlObj.pathname.slice(1);
        } else {
          videoId = urlObj.searchParams.get('v') || '';
        }
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      // Vimeo
      if (urlObj.hostname.includes('vimeo.com')) {
        const videoId = urlObj.pathname.split('/').filter(Boolean)[0];
        if (videoId) {
          return `https://player.vimeo.com/video/${videoId}`;
        }
      }

      return null;
    } catch {
      return null;
    }
  };

  const embedUrl = getEmbedUrl(url);

  if (embedUrl) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-accent/20">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg bg-accent/20 flex items-center justify-center p-6 text-center">
      <div className="space-y-3">
        <p className="text-foreground">
          Video preview not available for this URL format.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline inline-block"
        >
          Click here to watch the video
        </a>
      </div>
    </div>
  );
}
