import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 max-w-6xl mx-auto ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        Aakash
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-6 list-none">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/Project">Project</NavLink>
        </li>

        <li>
          <NavLink to="/Post">Post</NavLink>
        </li>

        <li>
          <NavLink to="/About">About</NavLink>
        </li>

        {/* Dark / Light Button */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg transition ${
              darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;