import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer
import Payment from "./pages/Payment";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
