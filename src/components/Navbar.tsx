import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-11/12 md:w-6/10">
      <nav className="w-full h-8 bg-bg-card flex items-center justify-center rounded-xl">
        <ul className="flex gap-3">
          <Link to="/List">List</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Reviews">Reviews</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
