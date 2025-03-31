import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar.jsx"; 
import Footer from "./components/Footer.jsx";
// import AlConsultation from "./components/AlConsultation.jsx";
import AnalysisForm from "./components/AnalysisForm.jsx";
import AuthForm from "./components/AuthForm.jsx";
import DashboardCard from "./components/DashboardCard.jsx";
import Hero from "./components/Hero.jsx";
import Lazyimage from "./components/LazyImage.jsx";
import SkinAnalysis from "./components/SkinAnalysis.jsx";

// Import pages
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Analysis from "./pages/Analysis.jsx";
import Login from "./pages/Login.jsx";
import SkinAnalysisPage from "./pages/SkinAnalysis.jsx"; // Renamed variable to avoid conflict with component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skin-analysis" element={<SkinAnalysisPage />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
