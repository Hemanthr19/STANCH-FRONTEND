import { Link, useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../css/navbar.module.css";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    setIsSidebarOpen(false); // Close the sidebar
    navigate("/login"); // Navigate to the login page
  };

  return (
    <nav
      onClick={handleSidebarClose}
      className="bg-primary text-white p-4 flex items-center justify-between shadow-md"
    >
      <div className="flex items-center space-x-2">
        <div onClick={handleSidebar} className={styles.menuIcon}>
          <MenuIcon />
        </div>
        <FaCar size={24} />
        <h1 className="text-2xl font-bold">Car Rental</h1>
      </div>

      <div className="space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>

      {/* Sidebar */}
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
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
