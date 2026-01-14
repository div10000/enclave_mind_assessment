// components/HomeButton.tsx
'use client';

import Link from 'next/link';

export default function HomeButton() {
  return (
    <Link
  href="/"
  className="
    fixed bottom-16 z-50
    h-12 w-12 rounded-full bg-black text-white
    flex items-center justify-center text-3xl shadow-xl
    hover:bg-gray-800 transition
  "
  aria-label="Home"
>
  🏡
</Link>
  );
}