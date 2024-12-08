import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext"; // Import the SearchContext
import logo from "../components/logo.jpg"; // Adjust the path to the logo as needed

const Navbar = () => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext); // Access searchQuery and setSearchQuery

    return (
        <nav className="relative bg-[rgb(20,20,20)] text-white px-2 py-4 shadow-md">
            {/* Yellow Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

            <div className="container-fluid flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center ml-20">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="iBOMMa"
                            className="h-20 w-auto" // Adjust height to fit navbar
                        />
                    </Link>
                </div>

                {/* Navigation Links and Search Bar */}
                <div className="ml-auto flex items-center space-x-6 ">
                    <ul className="flex space-x-6 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-yellow-400 transition"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/old-movies"
                                className="hover:text-yellow-400 transition"
                            >
                                Old Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/latest-movies"
                                className="hover:text-yellow-400 transition"
                            >
                                Latest Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/upcoming-movies"
                                className="hover:text-yellow-400 transition"
                            >
                                Upcoming
                            </Link>
                        </li>
                    </ul>

                    {/* Search Bar */}
                  <div className="flex items-center bg-black rounded-full px-2 py-1 ">
                    <input
                        type="text"
                        value={searchQuery} // Bind searchQuery state
                        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
                        placeholder="Search..."
                        className="bg-transparent text-white placeholder-gray-400 px-4 py-2 w-24 focus:outline-none"
                    />
                    <button className="text-black px-4 py-2 rounded-full hover:bg-yellow-500">
                        🔍
                    </button>
                  </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
