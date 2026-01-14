// components/HomeButton.tsx
'use client';

import Link from 'next/link';

export default function HomeButton() {
  return (
    <Link
  href="/"
  className="
    fixed top-0 z-50
    h-8 w-8 rounded-full bg-black text-white
    flex items-center justify-center text-3xl shadow-xl
    hover:bg-gray-800 transition
  "
  aria-label="Home"
>
  🏡
</Link>
  );
}