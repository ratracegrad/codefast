import React from 'react';
import ButtonLogin from './ButtonLogin';
import Image from 'next/image';
import productDemo from '../public/assets/productDemo.jpeg';

export default function Hero() {
  const isLoggedIn = false;

  return (
    <section
      id="hero"
      className="px-8 py-32 text-center lg:text-left max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start"
    >
      <Image src={productDemo} alt="Product demo" priority className="w-96 rounded-xl saturate-200" />
      <div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} />
      </div>
    </section>
  );
}
