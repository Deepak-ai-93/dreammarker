import Link from 'next/link';
import { Wind } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Wind className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-headline">DreamWeave Digital</span>
    </Link>
  );
}
