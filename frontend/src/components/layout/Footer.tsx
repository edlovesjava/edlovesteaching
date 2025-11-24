const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ed Loves Teaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
