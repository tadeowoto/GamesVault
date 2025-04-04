const Navbar = () => {
  return (
    <header className="w-11/12">
      <nav className="w-full h-8 bg-bg-card flex items-center justify-center rounded-xl">
        <ul className="flex gap-3">
          <li>List</li>
          <li>Add game</li>
          <li>Reviews</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
