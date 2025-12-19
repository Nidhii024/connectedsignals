import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Predictive Timing', path: '/solutions' },
        { name: 'Signal Priority', path: '/solutions' },
        { name: 'EnLighten Platform', path: '/solutions' },
        { name: 'V2I Data', path: '/solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/company' },
        { name: 'Careers', path: '/company' },
        { name: 'Press', path: '/company' },
        { name: 'Blog', path: '/company' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', path: '/technology' },
        { name: 'API Reference', path: '/technology' },
        { name: 'Case Studies', path: '/company' },
        { name: 'Support', path: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/company' },
        { name: 'Terms of Service', path: '/company' },
        { name: 'Security', path: '/technology' },
        { name: 'Compliance', path: '/technology' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-2 h-8 bg-red-500 rounded-sm"></div>
                <div className="w-2 h-8 bg-amber-500 rounded-sm"></div>
                <div className="w-2 h-8 bg-emerald-500 rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-white">Connected Signals</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-xs leading-relaxed">
              Enterprise-grade traffic signal intelligence platform. Building the future of smart transportation infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <Link to="/contact" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © 2025 Connected Signals. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/company" className="text-slate-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/company" className="text-slate-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/company" className="text-slate-400 hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
