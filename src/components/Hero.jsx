import { motion } from 'framer-motion';
import { ArrowRight, Building2, RefreshCw, ClipboardCheck } from 'lucide-react';

const cards = [
    {
        icon: Building2,
        title: 'Pensando em abrir sua empresa?',
        description: 'Abra seu CNPJ e deixe a burocracia com a Trust Contábil',
        cta: 'Abrir Empresa',
        color: 'from-trust-accent/20 to-trust-blue-light/20',
        border: 'border-trust-accent/30',
        iconColor: 'text-trust-accent',
        href: '#servicos',
    },
    {
        icon: RefreshCw,
        title: 'Migração de contador',
        description: 'Está insatisfeito com sua atual contabilidade? Venha para a Trust!',
        cta: 'Trocar de Contador',
        color: 'from-trust-gold/20 to-trust-gold-dark/20',
        border: 'border-trust-gold/30',
        iconColor: 'text-trust-gold',
        href: '#contato',
    },
    {
        icon: ClipboardCheck,
        title: 'Como está sua empresa hoje?',
        description: 'Entenda a situação da sua empresa de forma GRATUITA, através do nosso Diagnóstico Empresarial.',
        cta: 'Agendar Diagnóstico',
        color: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/30',
        iconColor: 'text-purple-400',
        href: '#contato',
    },
];

export default function Hero() {
    const scrollTo = (href) => {
        const el = document.getElementById(href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden gradient-animated dot-grid"
        >
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-trust-accent/10 blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-trust-blue-light/15 blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-trust-gold/5 blur-[120px]"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-8"
                >
                    <div className="glass px-5 py-2.5 rounded-full flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-trust-accent animate-pulse-slow" />
                        <span className="text-white/70">Especialistas em Contabilidade em Brasília-DF</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="font-heading text-center text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                >
                    Sua contabilidade,{' '}
                    <span className="gradient-text">simplificada</span>
                    <br />e moderna.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
                >
                    Nós trabalhamos para que nossos clientes possam focar em suas atividades,
                    sem se preocupar com todos os assuntos regulatórios da sua empresa.
                </motion.p>

                {/* CTA Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.7 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`glass bg-gradient-to-br ${card.color} border ${card.border} rounded-2xl p-6 cursor-pointer group`}
                                onClick={() => scrollTo(card.href)}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`${card.iconColor} w-6 h-6`} />
                                </div>
                                <h3 className="font-heading font-bold text-white text-lg mb-2 leading-snug">
                                    {card.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-4">
                                    {card.description}
                                </p>
                                <div className={`flex items-center gap-2 text-sm font-semibold ${card.iconColor} group-hover:gap-3 transition-all duration-300`}>
                                    {card.cta} <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-center mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-white/30 text-xs"
                    >
                        <span>Role para descobrir</span>
                        <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
