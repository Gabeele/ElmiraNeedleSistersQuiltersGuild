import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Elmira Needle Sisters Quilters Guild. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 