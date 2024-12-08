import React from 'react';
import ButtonLogin from './ButtonLogin';
import Link from 'next/link';

export default function Header() {
  return (
    <section className=" flex w-full items-center justify-between max-w-5xl mx-auto px-8 py-2 rounded-full mt-10 border-2 border-zinc-700">
      <div>CodeFastSaaS</div>
      <div className="space-x-4 hidden md:block">
        <Link href="#pricing" className="link link-hover">
          Pricing
        </Link>
        <Link href="#faq" className="link link-hover">
          FAQ
        </Link>
      </div>
      <div>
        <ButtonLogin />
      </div>
    </section>
  );
}
