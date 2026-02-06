import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img
              src="/assets/generated/greenwood-high-logo-placeholder.dim_512x512.png"
              alt="Greenwood High"
              className="h-16 w-auto opacity-90"
            />
            <p className="text-sm text-foreground">
              Discover your future with comprehensive career counselling
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us!</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-foreground hover:text-foreground/80 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-foreground" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-foreground">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-foreground flex-shrink-0" />
              <p className="text-foreground">{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground">
          <p>
            © 2026. Built with <span className="text-foreground">♥</span> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/80 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
