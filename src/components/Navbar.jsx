import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/admin-ajaxf.png';

const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('inicio');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (href) => {
        setMobileOpen(false);
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/10 py-3' : 'py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <img src={logo} alt="Trust Contábil - Contabilidade em Brasília" width={150} height={150} />

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNav(link.href)}
                                className={`nav-link text-sm ${active === link.href.replace('#', '') ? 'active text-white' : ''}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/5561998501881?text=Olá, seja bem-vindo(a) Trust Contábil. Conte-nos resumidamente como podemos te auxiliar que em breve um especialista entrará em contato."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm py-2.5 px-6"
                        >
                            Fale Conosco
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[68px] inset-x-0 z-40 glass border-b border-white/10 px-6 py-6 flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNav(link.href)}
                                className="text-white/80 hover:text-white text-left font-medium py-2 border-b border-white/10 last:border-0"
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href="https://wa.me/5561998501881"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm text-center mt-2"
                        >
                            Fale Conosco
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
