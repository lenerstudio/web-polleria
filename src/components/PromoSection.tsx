import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PromoSection: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
            {/* Background decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block bg-white/20 px-4 py-2 rounded-full font-bold mb-4 backdrop-blur-sm border border-white/30"
                        >
                            <Tag className="w-4 h-4 inline mr-2" /> Oferta Especial
                        </motion.span>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            ¡20% DE DESCUENTO!
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-orange-100 mb-8 font-light"
                        >
                            En tu primer pedido online usando el código: <span className="font-mono bg-white text-orange-600 px-2 py-1 rounded font-bold">POLLO20</span>
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto md:mx-0"
                        >
                            Reclamar Oferta <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <motion.img
                        src="/img/image-13.jpeg"
                        alt="Delicious Chicken"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white/20 shadow-2xl"
                        initial={{ opacity: 0, x: 50, rotate: -20, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 3, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                        whileHover={{ rotate: 0, scale: 1.05 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
