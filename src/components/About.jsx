import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp, StaggerContainer, StaggerChild } from './Animations';
import { Shield, Target, TrendingUp, Users } from 'lucide-react';

const stats = [
    { value: '5', unit: 'anos', label: 'de experiência no mercado' },
    { value: '100+', unit: '', label: 'empresas abertas com sucesso' },
    { value: '10', unit: 'dias', label: 'prazo máximo para abertura do seu CNPJ' },
    { value: '100%', unit: '', label: 'processo online e sem burocracia' },
];

const values = [
    {
        icon: Shield,
        title: 'Transparência e Ética',
        desc: 'Entendemos as necessidades do seu negócio e oferecemos soluções personalizadas com total honestidade.',
    },
    {
        icon: Target,
        title: 'Controle Total',
        desc: 'Você terá total controle sobre seus processos e os números da sua empresa a qualquer momento.',
    },
    {
        icon: TrendingUp,
        title: 'Crescimento Sustentável',
        desc: 'Nossa assessoria ajuda você a tomar decisões assertivas e alcançar seus objetivos de forma consistente.',
    },
    {
        icon: Users,
        title: 'Atendimento Personalizado',
        desc: 'Na Trust você é atendido por pessoas em tempo real pelo WhatsApp, Telefone ou vídeo sem limitações.',
    },
];

export default function About() {
    return (
        <section id="sobre" className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-trust-dark" />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/10 to-transparent" />

            {/* Decorative circle */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-trust-accent/10"
            />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section header */}
                <FadeUp className="text-center mb-20">
                    <div className="section-divider" />
                    <p className="text-trust-accent font-semibold text-sm uppercase tracking-widest mb-3">
                        Quem somos
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        A Trust <span className="gradient-text">Contábil</span>
                    </h2>
                </FadeUp>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <FadeLeft>
                        <div>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                Nós trabalhamos para que nossos clientes possam focar em suas atividades,
                                <strong className="text-white"> sem se preocupar com todos os assuntos regulatórios da sua empresa.</strong>
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                Toda a estrutura da Trust Contábil está direcionada para o desenvolvimento de soluções
                                que atendam as necessidades de seus clientes, buscando o máximo de agilidade e eficiência
                                com um atendimento personalizado, onde a relação Trust/Cliente é tomada como prioridade
                                na busca de um crescente padrão de excelência.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://wa.me/5561998501881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    Fale com um Especialista
                                </a>
                                <button
                                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn-secondary"
                                >
                                    Ver Serviços
                                </button>
                            </div>
                        </div>
                    </FadeLeft>

                    {/* Stats */}
                    <FadeRight>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass rounded-2xl p-6 text-center min-h-[120px]  "
                                >
                                    <div className="font-heading font-black text-4xl gradient-text">
                                        {stat.value}<span className="text-2xl">{stat.unit}</span>
                                    </div>
                                    <div className="text-white/50 text-sm mt-2 leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </FadeRight>
                </div>

                {/* Values grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v, i) => {
                        const Icon = v.icon;
                        return (
                            <StaggerChild key={i}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="glass rounded-2xl p-6 group min-h-[250px]"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-trust-accent/10 flex items-center justify-center mb-4 group-hover:bg-trust-accent/20 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-trust-accent" />
                                    </div>
                                    <h4 className="font-heading font-bold text-white text-base mb-2">{v.title}</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                                </motion.div>
                            </StaggerChild>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
