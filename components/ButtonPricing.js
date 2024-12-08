import React from 'react';

export default function ButtonPricing({ title, extraStyle }) {
  return (
    <button className={`btn btn-primary  ${extraStyle ? extraStyle : ''}`}>
      {title}
    </button>
  );
}
