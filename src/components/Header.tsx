import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    onOrderClick: () => void;
    onReserveClick: () => void;
    cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick, onReserveClick, cartCount = 0 }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="/img/logo-pollo.png"
                        alt="Pollería Hermanos Logo"
                        className="h-20 w-auto object-contain transition-transform group-hover:scale-135"
                    />
                    <span className={`text-2xl font-bold tracking-tighter hidden sm:block ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                        POLLERÍA<span className="text-orange-600">HERMANOS</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Inicio', 'Nosotros', 'Menú', 'Promociones'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200 hover:text-white drop-shadow-sm'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={onReserveClick}
                        className={`px-5 py-2 rounded-full font-bold transition-all ${scrolled
                            ? 'text-gray-900 hover:bg-gray-100'
                            : 'text-white border border-white/30 hover:bg-white/10'
                            }`}
                    >
                        Reservar
                    </button>
                    <button
                        onClick={onOrderClick}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-600/20 transition-transform hover:scale-105 flex items-center gap-2"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        Pedir {cartCount > 0 && <span className="bg-white text-orange-600 text-xs rounded-full px-1.5 py-0.5">{cartCount}</span>}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-900 bg-white p-2 rounded-lg shadow-sm"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-4">
                            {['Inicio', 'Nosotros', 'Menú', 'Promociones'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-800 font-medium py-2 border-b border-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <button
                                onClick={() => { onReserveClick(); setMobileMenuOpen(false); }}
                                className="w-full text-center py-3 border border-gray-200 rounded-xl font-bold text-gray-700"
                            >
                                Reservar Mesa
                            </button>
                            <button
                                onClick={() => { onOrderClick(); setMobileMenuOpen(false); }}
                                className="w-full text-center py-3 bg-orange-600 text-white rounded-xl font-bold shadow-lg"
                            >
                                Pedir Delivery
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
