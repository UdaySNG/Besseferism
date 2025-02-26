import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 