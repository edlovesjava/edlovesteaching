import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Welcome to Ed Loves Teaching
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Professional consulting and teaching platform for software development,
        Java, Spring Boot, and modern application development.
      </p>
      <Link
        to="/blog"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Read Latest Articles
      </Link>
    </div>
  );
};

export default HomePage;
