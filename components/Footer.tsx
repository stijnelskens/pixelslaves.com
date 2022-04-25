const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="py-4 mt-8 border-t border-gray-200 dark:border-gray-border dark:text-white">
      <div className="container">
        <span>&copy; {year} - PixelSlaves.com</span>
      </div>
    </footer>
  );
};
export default Footer;