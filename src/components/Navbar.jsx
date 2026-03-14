import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Technology', path: '/technology' },
    { name: 'Products', path: '/products' },
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 lg:px-20 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-baseline justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoIcon} alt="Infimind Labs Icon" className="h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-screen -ml-4 -mr-8" />
          <span className="text-xl font-bold tracking-tight text-charcoal dark:text-white uppercase"><span className="font-extrabold pr-0.5">Infimind</span><span className="text-primary font-extrabold">Labs</span></span>
        </Link>
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors pb-1 ${isActive(link.path)
                ? 'text-primary border-b-2 border-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <button className="bg-primary hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/20 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
