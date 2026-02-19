import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerChild } from './Animations';
import { MessageCircle, Lightbulb, Receipt, PiggyBank } from 'lucide-react';

const advantages = [
    {
        icon: MessageCircle,
        title: 'Atendimento',
        description:
            'Na Trust você é atendido por pessoas em tempo real pelo WhatsApp, Telefone ou por vídeo sem limitações.',
        color: 'from-sky-400 to-trust-accent',
        glow: 'from-sky-400/20 to-trust-accent/20',
    },
    {
        icon: Lightbulb,
        title: 'Orientações',
        description:
            'Tenha acesso a diferentes orientações exclusivas para seu negócio prosperar e crescer com consistência.',
        color: 'from-amber-400 to-trust-gold',
        glow: 'from-amber-400/20 to-trust-gold/20',
    },
    {
        icon: Receipt,
        title: 'Fiscal',
        description:
            'Deixamos sua empresa em ordem com o fisco sem você precisar fazer nada mais – ganhe tempo e tranquilidade.',
        color: 'from-emerald-400 to-teal-500',
        glow: 'from-emerald-400/20 to-teal-500/20',
    },
    {
        icon: PiggyBank,
        title: 'Gestão Financeira',
        description:
            'Possuímos o conhecimento necessário para orientá-lo na melhor solução para gestão financeira do seu negócio.',
        color: 'from-violet-500 to-purple-600',
        glow: 'from-violet-500/20 to-purple-600/20',
    },
];

export default function Advantages() {
    return (
        <section id="vantagens" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-trust-dark via-trust-blue-dark/20 to-trust-dark" />

            {/* Large decorative gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-trust-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <FadeUp className="text-center mb-20">
                    <div className="section-divider" />
                    <p className="text-trust-accent font-semibold text-sm uppercase tracking-widest mb-3">
                        Por que nos escolher
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Conheça as principais <span className="gradient-text">Vantagens</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Uma experiência contábil que realmente faz diferença no seu dia a dia
                    </p>
                </FadeUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((adv, i) => {
                        const Icon = adv.icon;
                        return (
                            <StaggerChild key={i}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative glass rounded-2xl p-8 group overflow-hidden text-center"
                                >
                                    {/* Background glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${adv.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                                    {/* Icon */}
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.4 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className="font-heading font-bold text-white text-xl mb-3">
                                            {adv.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            {adv.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </StaggerChild>
                        );
                    })}
                </StaggerContainer>

                {/* How to open CNPJ process */}
                <FadeUp delay={0.3} className="mt-24">
                    <div className="glass rounded-2xl p-10">
                        <div className="text-center mb-12">
                            <h3 className="font-heading text-3xl font-bold text-white mb-3">
                                Como abrimos o seu <span className="gradient-text">CNPJ</span>
                            </h3>
                            <p className="text-white/50">
                                Abrimos seu CNPJ sem burocracia. Processo realizado totalmente online — você não precisa nem sair de casa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-trust-accent/30 via-trust-gold/50 to-trust-accent/30" />

                            {[
                                {
                                    step: '01',
                                    title: 'Primeiro Contato',
                                    desc: 'Entre em contato com um de nossos especialistas para entendermos a necessidade e indicarmos a melhor opção fiscal.',
                                },
                                {
                                    step: '02',
                                    title: 'Envio de Informações',
                                    desc: 'Informe dados básicos da sua nova empresa para que possamos realizar o processo de abertura.',
                                },
                                {
                                    step: '03',
                                    title: 'Documentação e Registro',
                                    desc: 'Pronto! Nossos especialistas revisam seus dados e enviam a documentação da sua empresa por e-mail.',
                                },
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 0.6 }}
                                    className="text-center relative"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-trust-accent to-trust-blue-light flex items-center justify-center mx-auto mb-4 text-white font-heading font-black text-xl shadow-lg"
                                        style={{ boxShadow: '0 8px 30px rgba(0,180,216,0.4)' }}
                                    >
                                        {step.step}
                                    </motion.div>
                                    <h4 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <p className="text-white/40 text-sm mb-4">
                                ⏱ Prazo máximo de <strong className="text-trust-accent">10 dias úteis</strong> para obter seu CNPJ
                            </p>
                            <a
                                href="https://wa.me/5561998501881?text=Olá, gostaria de abrir meu CNPJ com a Trust Contábil!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex"
                            >
                                Quero abrir minha empresa agora
                            </a>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
