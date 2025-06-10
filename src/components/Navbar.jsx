import { NavLink, Link } from "react-router";
import { navData } from "../data/data";

const Navbar = () => {
  return (
    <nav className="">
      <div className="p-4 flex items-center justify-between">
        {/* Logo Section */}
        <h1 className="font-semibold text-xl drop-shadow-md">Hamro Yatra Nepal</h1>

        {/* Nav Items */}
        <ul className="hidden md:flex space-x-6">
          {navData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive ? "bg-black text-white rounded-full p-2" : "hover:text-gray-800"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <input type="text"
          placeholder="Search here..."
          className="hidden md:flex border border-gray-400 p-1 rounded-xl placeholder:text-black placeholder:pl-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
