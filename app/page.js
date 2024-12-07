import Link from 'next/link';
import ButtonLogin from '../components/ButtonLogin';

export default function Home() {
  const isLoggedIn = true;

  return (
    <main>
      <section className=" flex w-full items-center justify-between max-w-5xl mx-auto px-8 py-2 rounded-full mt-10 border-2 border-zinc-700">
        <div>CodeFastSaaS</div>
        <div className="space-x-4 hidden md:block">
          <a href="#pricing" className="link link-hover">
            Pricing
          </a>
          <a href="#faq" className="link link-hover">
            FAQ
          </a>
        </div>
        <div>
          <ButtonLogin />
        </div>
      </section>
      <section id="hero" className="px-8 py-32 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} />
      </section>
    </main>
  );
}
