import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to our Car Rental service! We provide a wide range of vehicles to suit your travel needs.
          Our mission is to offer reliable and convenient rental options at affordable prices.
        </p>
        
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Information</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <span className="font-semibold text-lg mr-2">Email:</span>
            <a href="mailto:hemanthr.jan19@gmail.com" className="text-blue-600 hover:underline">
              hemanthr.jan19@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center">
            <span className="font-semibold text-lg mr-2">Contact No:</span>
            <span className="text-lg">7019599412</span>
          </div>

          <div className="flex items-center justify-center">
            <span className="font-semibold text-lg mr-2">Location:</span>
            <span className="text-lg">India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
