import React from 'react';
import Link from 'next/link';

export default function ButtonLogin({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/dashboard" className="mt-8">
          Dashboard
        </Link>
      </button>
    );
  }

  return (
    <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link href="/api/auth/login">Login</Link>
    </button>
  );
}
