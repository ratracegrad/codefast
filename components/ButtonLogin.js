import React from 'react';
import Link from 'next/link';

export default function ButtonLogin({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <button className="btn btn-primary">
        <Link href="/dashboard">Dashboard</Link>
      </button>
    );
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link href="/api/auth/login">Login</Link>
    </button>
  );
}
