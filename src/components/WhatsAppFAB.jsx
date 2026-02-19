import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFAB() {
    const [visible, setVisible] = useState(false);
    const [tooltip, setTooltip] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        const tooltipTimer = setTimeout(() => setTooltip(false), 6000);
        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {tooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                className="glass rounded-xl px-4 py-3 text-sm text-white max-w-[180px] relative"
                            >
                                <button
                                    onClick={() => setTooltip(false)}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
                                >
                                    <X size={10} />
                                </button>
                                <p className="font-semibold text-white">Fale com a Trust!</p>
                                <p className="text-white/60 text-xs mt-0.5">Seg-Sex 9:00 - 18:00</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Button */}
                    <motion.a
                        href="https://wa.me/5561998501881?text=Olá, seja bem-vindo(a) Trust Contábil. Conte-nos resumidamente como podemos te auxiliar que em breve um especialista entrará em contato."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-xl text-white"
                        style={{ boxShadow: '0 8px 30px rgba(16,185,129,0.5)' }}
                    >
                        <MessageCircle className="w-7 h-7" />
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
