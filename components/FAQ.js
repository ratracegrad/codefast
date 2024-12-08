import React from 'react';
import FaqListItem from './FaqListItem';

export default function FAQ() {
  return (
    <section id="faq" className="bg-base-200">
      <div className="py-32 px-8 max-w-3xl mx-auto">
        <p className="text-lg uppercase font-medium text-center text-primary mb-4">
          FAQ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <ul className="max-w-xl mx-auto">
          {[
            { question: 'What do I get exactly', answer: 'Loreum Ipseum' },
            { question: 'Can I get a refund?', answer: 'Loreum Ipseum' },
            { question: 'I have another question', answer: 'Loreum Ipseum' },
          ].map((qa) => (
            <FaqListItem key={qa.question} qa={qa} />
          ))}
        </ul>
      </div>
    </section>
  );
}
