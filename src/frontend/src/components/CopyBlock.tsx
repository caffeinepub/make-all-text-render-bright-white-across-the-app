import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from './ui/button';

interface CopyBlockProps {
  title: string;
  content: string;
}

export default function CopyBlock({ title, content }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="bg-accent/20 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
        {content}
      </pre>
    </div>
  );
}
