import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '@/components/shared/Logo';

const socialLinks = [
  { icon: <Facebook />, href: '#', name: 'Facebook' },
  { icon: <Twitter />, href: '#', name: 'Twitter' },
  { icon: <Linkedin />, href: '#', name: 'LinkedIn' },
  { icon: <Instagram />, href: '#', name: 'Instagram' },
];

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Weaving digital dreams into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/social-media-marketing"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@dreamweave.digital</li>
                <li>(555) 123-4567</li>
                <li>123 Digital Ave, Webville, ST 12345</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DreamWeave Digital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
