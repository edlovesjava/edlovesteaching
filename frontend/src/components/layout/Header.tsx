import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Ed Loves Teaching
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 transition">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
