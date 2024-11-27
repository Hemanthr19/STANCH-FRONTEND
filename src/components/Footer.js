import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
        
          <div className="w-full sm:w-1/3 mb-4">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              We are dedicated to providing the best car rental services. Explore our range of vehicles to find your perfect ride.
            </p>
          </div>

        
          <div className="w-full sm:w-1/3 mb-4">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <ul>
              <li>
                <span>Email: </span>
                <a
                  href="mailto:hemanthr.jan19@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  hemanthr.jan19@gmail.com
                </a>
              </li>
              <li>
                <span>Phone: </span>
                +1-234-567-890
              </li>
              <li>
                <Link to="/contact" className="text-blue-400 hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="w-full sm:w-1/3 mb-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Copyright</h2>
            <p className="text-sm">
              © {new Date().getFullYear()} Car Rental. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
