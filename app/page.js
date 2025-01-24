import Link from 'next/link';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ButtonLogin from '@/components/ButtonLogin';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();
  // hello world

  return (
    <main>
      {/* Header */}
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
          <ButtonLogin session={session} extraStyle="w-full" />
        </div>
      </section>

      <Hero />
      <Pricing />
      <FAQ />
    </main>
  );
}
