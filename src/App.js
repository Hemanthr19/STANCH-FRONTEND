import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Payment from "./pages/Payment";
import LoginPage from "./pages/LoginPage";
import SearchResults from "./pages/SearchResults"; // Import SearchResults
import AboutPage from "./pages/AboutPage";

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
            <Route path="/search" element={<SearchResults />} />
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
