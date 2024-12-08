import React from 'react';
import ButtonPricing from './ButtonPricing';
import ListItem from './ListItem';

export default function Pricing() {
  const pricingFeaturesList = [
    'Collect customer feedback',
    'Unlimited boards',
    'Admin Dashboard',
    '24/7 support',
  ];

  return (
    <section id="pricing" className="bg-base-200">
      <div className="py-32 px-8 max-w-3xl mx-auto">
        <p className="text-lg uppercase font-medium text-center text-primary mb-4">
          Pricing
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          A pricing that adapts to your needs
        </h2>
        <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
          <div className="flex gap-2 items-baseline">
            <div className="text-4xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-60">
              /month
            </div>
          </div>

          <ul className="space-y-2">
            {pricingFeaturesList.map((feature, index) => (
              <ListItem key={index}>{feature}</ListItem>
            ))}
          </ul>
          <ButtonPricing title={'Buy Now'} extraStyle="w-full" />
        </div>
      </div>
    </section>
  );
}