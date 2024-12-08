import React from 'react';
import ButtonLogin from './ButtonLogin';

export default function Hero() {
	const isLoggedIn = false;
	
  return (
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
  );
}
