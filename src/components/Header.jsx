import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-m bg-gray-800 text-white p-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">InsightBoard</h1>
      </Link>
    </header>
  );
}

export default Header;