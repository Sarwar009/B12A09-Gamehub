import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date ().getFullYear ()} GameHub. Created by Sarwar❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
