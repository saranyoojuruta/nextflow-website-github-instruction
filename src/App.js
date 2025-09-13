import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg" style={{background: 'linear-gradient(90deg, #3e2723 0%, #ffb74d 100%)', boxShadow: '0 2px 8px rgba(44,27,18,0.2)', marginBottom: 0}}>
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/" style={{color: '#ffb74d', fontSize: '1.5rem', letterSpacing: '2px', textShadow: '0 2px 8px #3e2723'}}>โทรศัพท์สีชาเย็น</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/" style={{color: '#ffe0b2', fontSize: '1.1rem', marginRight: '1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/product" style={{color: '#ffe0b2', fontSize: '1.1rem', marginRight: '1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/features" style={{color: '#ffe0b2', fontSize: '1.1rem', marginRight: '1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    Features
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/gallery" style={{color: '#ffe0b2', fontSize: '1.1rem', marginRight: '1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/faq" style={{color: '#ffe0b2', fontSize: '1.1rem', marginRight: '1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    FAQ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/about" style={{color: '#ffe0b2', fontSize: '1.1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/contact" style={{color: '#ffe0b2', fontSize: '1.1rem', borderRadius: '20px', padding: '0.5rem 1.2rem', transition: 'background 0.2s'}}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/features" element={<Features />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
