import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.jpeg" alt="DreamWeave Digital Logo" width={150} height={40} />
    </Link>
  );
}
