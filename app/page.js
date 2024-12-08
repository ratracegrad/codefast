import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';

export default async function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Pricing />
      <FAQ />
    </main>
  );
}
