import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Toaster } from "react-hot-toast";

function Layout() {

  const location = useLocation();
  const showNavbarAndFooter =
  location.pathname !== "/signup" && location.pathname !== "/login";

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Toaster/>
      <Layout />
    </Router>
  );
}

export default App;