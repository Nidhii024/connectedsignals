import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { WhoWeServePage } from './pages/WhoWeServePage';
import { PlatformPage } from './pages/PlatformPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/who-we-serve" element={<WhoWeServePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;