import { Link, useNavigate } from "react-router-dom";
import { FaCar, FaBell } from "react-icons/fa"; 
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../css/navbar.module.css";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const handleLoginClick = () => {
    setIsSidebarOpen(false); 
    navigate("/login"); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); 
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav
      onClick={handleSidebarClose}
      className="bg-primary text-white p-4 flex items-center justify-between shadow-md relative"
    >
     
      <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
        <div onClick={handleSidebar} className={styles.menuIcon}>
          <MenuIcon />
        </div>
        <FaCar size={24} />
        <h1 className="text-2xl font-bold">Car Rental</h1>
      </div>

     
      <form
        onSubmit={handleSearch}
        className="flex-grow mx-8 flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      

     
      <div className="space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>

      

      
      <div
        className={`${styles.sidebardefault} ${
          !isSidebarOpen ? styles.sidebar : styles.sidebarappear
        }`}
      >
        <div className={styles.loginsection}>
          <PersonIcon />
          <span className="cursor-pointer" onClick={handleLoginClick}>
            Login
          </span>
        </div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
