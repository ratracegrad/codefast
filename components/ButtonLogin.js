'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';

const ButtonLogin = ({ isLoggedIn, extraStyle }) => {
  const dashboardUrl = '/dashboard';

  if (isLoggedIn) {
    return (
      <button className="btn btn-primary">
        <Link href={dashboardUrl}>Dashboard</Link>
      </button>
    );
  }

  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ''}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
    >
      Get Started
    </button>
  );
};

export default ButtonLogin;
