import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-charcoal border-t border-slate-200 dark:border-emerald-900/10 py-16 px-6 lg:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <img src={logoIcon} alt="Infimind Labs Icon" className="h-16 w-auto object-contain mix-blend-multiply dark:mix-blend-screen -ml-6 -mr-10" />
            <h2 className="text-xl font-black tracking-tight text-charcoal dark:text-white uppercase"><span className="font-extrabold pr-0.5">Infimind</span><span className="text-primary font-extrabold">Labs</span></h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Building the foundational models for emerging markets. Culturally grounded, ethically minded, and globally impactful.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            <li><Link to="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-200 dark:border-emerald-900/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs font-medium">© 2026 Infimind Labs LLP. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">podcasts</span></a>
        </div>
      </div>
    </footer>
  );
}
