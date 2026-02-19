import { ShoppingBag, Briefcase, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerChild } from './Animations';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Building2,
        title: 'Abertura de Empresas',
        subtitle: 'Abra seu CNPJ em poucos dias',
        color: 'from-trust-accent to-trust-blue-light',
        glow: 'rgba(0,180,216,0.3)',
        items: [
            'Obtenha seu CNPJ em poucos dias',
            'Assessoria completa para regularizar seu negócio',
            'Enquadramento no regime tributário mais vantajoso',
            'Indicação do melhor tipo de empresa para pagar menos',
            'Abertura sem burocracia: esqueça a papelada',
            'Consultoria para aumentar seus lucros',
        ],
    },
    {
        icon: ShoppingBag,
        title: 'Contabilidade para Comércio',
        subtitle: 'Venda com tranquilidade e segurança',
        color: 'from-trust-gold to-trust-gold-dark',
        glow: 'rgba(244,162,97,0.3)',
        items: [
            'Departamento Fiscal: apuração de impostos',
            'Departamento Societário: abertura e encerramento',
            'Controle de Caixa Eficiente',
            'Redução da Carga Tributária legal',
            'Evita problemas com a Receita Federal',
            'Otimiza seus resultados financeiros',
        ],
    },
    {
        icon: Briefcase,
        title: 'Prestadores de Serviço',
        subtitle: 'Controle total sobre seus processos',
        color: 'from-purple-500 to-pink-500',
        glow: 'rgba(168,85,247,0.3)',
        items: [
            'Departamento Fiscal completo',
            'Departamento Pessoal',
            'Departamento Financeiro',
            'Abertura e regularização de empresas',
            'Transparência e ética em tudo',
            'Crescimento sustentável garantido',
        ],
    },
];

export default function Services() {
    return (
        <section id="servicos" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-trust-dark via-trust-blue-dark/30 to-trust-dark" />
            <div className="absolute inset-0 dot-grid opacity-30" />

            <div className="relative max-w-7xl mx-auto px-6">
                <FadeUp>
                    <div className="text-center mb-20">
                        <div className="section-divider" />
                        <p className="text-trust-accent font-semibold text-sm uppercase tracking-widest mb-3">
                            O que oferecemos
                        </p>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            Nossos <span className="gradient-text">Serviços</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">
                            Soluções contábeis completas para todos os tipos de negócio
                        </p>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <FadeUp key={i} delay={i * 0.15}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass rounded-2xl overflow-hidden group"
                                    style={{ boxShadow: `0 4px 30px ${service.glow}20` }}
                                >
                                    {/* Gradient top bar */}
                                    <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />

                                    <div className="p-8">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                                            style={{ boxShadow: `0 8px 20px ${service.glow}` }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </motion.div>

                                        <h3 className="font-heading font-bold text-white text-xl mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/50 text-sm mb-6">{service.subtitle}</p>

                                        {/* Items */}
                                        <StaggerContainer className="space-y-3 mb-8">
                                            {service.items.map((item, j) => (
                                                <StaggerChild key={j}>
                                                    <div className="flex items-start gap-3">
                                                        <CheckCircle className="w-4 h-4 text-trust-accent mt-0.5 shrink-0" />
                                                        <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                                                    </div>
                                                </StaggerChild>
                                            ))}
                                        </StaggerContainer>

                                        {/* CTA */}
                                        <a
                                            href="https://wa.me/5561998501881?text=Olá, gostaria de saber mais sobre os serviços da Trust Contábil."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                                        >
                                            Saiba mais <ArrowRight size={15} className={`text-trust-accent group-hover:translate-x-1 transition-transform`} />
                                        </a>
                                    </div>
                                </motion.div>
                            </FadeUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
