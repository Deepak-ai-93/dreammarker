import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.jpeg" alt="Dreammakers digital Logo" width={120} height={32} />
    </Link>
  );
}
