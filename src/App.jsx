import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import ProductsPage from './pages/ProductsPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';

// Helper component to handle scroll restoration and dark mode enforcement per route
function ScrollToTopAndTheme() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Pages that specifically used <html class="dark"> in the original designs
    const darkPages = ['/products', '/about'];
    if (darkPages.includes(pathname)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopAndTheme />
      <Navbar />
      <div className="flex-1 min-h-[calc(100vh-100px)] flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
