import { motion } from 'framer-motion';
import { FadeUp } from './Animations';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';

const contacts = [
    {
        icon: Phone,
        label: 'Telefone',
        value: '(61) 99850-1881',
        href: 'tel:+5561998501881',
        color: 'text-trust-accent',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: 'Clique para conversar',
        href: 'https://wa.me/5561998501881?text=Olá, gostaria de mais informações sobre os serviços da Trust Contábil.',
        color: 'text-emerald-400',
    },
    {
        icon: Mail,
        label: 'E-mail',
        value: 'atendimento@trustcontabil.com',
        href: 'mailto:atendimento@trustcontabil.com',
        color: 'text-trust-gold',
    },
    {
        icon: Clock,
        label: 'Horário',
        value: 'Seg-Sex 9:00 - 18:00',
        href: null,
        color: 'text-purple-400',
    },
    {
        icon: MapPin,
        label: 'Localização',
        value: 'Brasília - DF',
        href: null,
        color: 'text-pink-400',
    },
];

export default function Contact() {
    return (
        <section id="contato" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-animated opacity-50" />
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="absolute inset-0 bg-trust-dark/80" />

            <div className="relative max-w-7xl mx-auto px-6">
                <FadeUp className="text-center mb-20">
                    <div className="section-divider" />
                    <p className="text-trust-accent font-semibold text-sm uppercase tracking-widest mb-3">
                        Fale conosco
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Entre em <span className="gradient-text">Contato</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Adoraríamos falar com você. Sinta-se à vontade para entrar em contato usando os detalhes abaixo.
                    </p>
                </FadeUp>

                {/* Cards centralizados */}
                <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto">
                    {contacts.map((c, i) => {
                        const Icon = c.icon;
                        const content = (
                            <motion.div
                                key={i}
                                whileHover={{ x: 6 }}
                                className="glass rounded-xl p-5 flex items-center gap-4 group w-full"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className={`w-5 h-5 ${c.color}`} />
                                </div>
                                <div>
                                    <div className="text-white/40 text-xs mb-0.5">{c.label}</div>
                                    <div className={`font-semibold ${c.href ? 'hover:text-white' : ''} text-white/90 transition-colors`}>
                                        {c.value}
                                    </div>
                                </div>
                            </motion.div>
                        );

                        return c.href ? (
                            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="w-full">
                                {content}
                            </a>
                        ) : (
                            <div key={i} className="w-full">{content}</div>
                        );
                    })}

                    {/* WhatsApp CTA */}
                    <motion.a
                        href="https://wa.me/5561998501881?text=Olá, seja bem-vindo(a) Trust Contábil. Conte-nos resumidamente como podemos te auxiliar que em breve um especialista entrará em contato."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary flex items-center justify-center gap-3 w-full"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Iniciar conversa no WhatsApp
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
