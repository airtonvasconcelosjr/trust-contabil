import { Instagram, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/admin-ajaxf.png';

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-trust-dark border-t border-white/5 pt-16 pb-8 overflow-hidden">
            {/* Subtle gradient top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trust-accent/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-trust-accent to-trust-blue-light flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
                                T
                            </div>

                            <div>
                                <div className="font-heading font-bold text-white text-lg leading-none">Trust</div>
                                <div className="text-trust-accent text-xs font-medium leading-none">Contábil</div>
                            </div> */}
                            <img src={logo} alt="Trust Contábil - Gestão Contábil Moderna" className="w-50" />
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Especialistas em contabilidade em Brasília-DF. Cuidamos da sua empresa para você focar no que importa.
                        </p>
                        {/* Social */}
                        <div className="flex items-center gap-3 mt-5">
                            <motion.a
                                href="https://www.instagram.com/trustcontabilidade_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-trust-accent/50 transition-all duration-200"
                            >
                                <Instagram size={16} />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/5561998501881"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-200"
                            >
                                <MessageCircle size={16} />
                            </motion.a>
                            <motion.a
                                href="mailto:atendimento@trustcontabil.com"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-trust-gold hover:border-trust-gold/50 transition-all duration-200"
                            >
                                <Mail size={16} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">
                            Navegação
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Início', id: 'inicio' },
                                { label: 'Sobre nós', id: 'sobre' },
                                { label: 'Serviços', id: 'servicos' },
                                { label: 'Vantagens', id: 'vantagens' },
                                { label: 'Contato', id: 'contato' },
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-white/40 hover:text-trust-accent text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">
                            Contatos
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-white/40 text-sm">
                                <Phone size={14} className="text-trust-accent shrink-0" />
                                <a href="tel:+5561998501881" className="hover:text-white transition-colors">
                                    (61) 99850-1881
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-white/40 text-sm">
                                <Mail size={14} className="text-trust-gold shrink-0" />
                                <a href="mailto:atendimento@trustcontabil.com" className="hover:text-white transition-colors">
                                    atendimento@trustcontabil.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-white/40 text-sm">
                                <MessageCircle size={14} className="text-emerald-400 shrink-0" />
                                <a
                                    href="https://wa.me/5561998501881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <motion.a
                                href="https://wa.me/5561998501881?text=Olá! Gostaria de falar com um especialista da Trust Contábil."
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="btn-gold inline-flex items-center gap-2 py-3 px-6 text-sm"
                            >
                                <MessageCircle size={15} />
                                Fale com um Especialista
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-white/25 text-xs">
                        Trust Contábil ® {year} — Todos os direitos reservados
                    </p>
                    <p className="text-white/25 text-xs">
                        Brasília - DF
                    </p>
                </div>
            </div>
        </footer>
    );
}
