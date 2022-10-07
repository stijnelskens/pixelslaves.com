import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="py-6 mt-10 border-t border-gray-200">
      <div className="container">
        <span>&copy; {year} - PixelSlaves.com</span>
      </div>
    </footer>
  );
};
export default Footer;