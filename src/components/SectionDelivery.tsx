import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionDeliveryProps {
    onOrderClick: () => void;
}

const SectionDelivery: React.FC<SectionDeliveryProps> = ({ onOrderClick }) => {
    return (
        <section className="py-20 bg-orange-50 relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 relative z-10"
                >
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2 block">Delivery Express</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Llevamos el sabor a tu puerta <br /> <span className="text-orange-500">en minutos</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Olvídate de cocinar. Pide tus platos favoritos y recíbelos calientes y listos para disfrutar.
                        Seguimiento en tiempo real y empaques seguros.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onOrderClick}
                            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Pedir Ahora <ArrowRight className="w-5 h-5" />
                        </button>
                        <a
                            href="tel:+123456789"
                            className="px-8 py-4 border-2 border-orange-200 hover:border-orange-600 text-orange-600 font-bold rounded-full transition-colors flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" /> Llamar
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/img/pollo-a-la-brasa.webp"
                            alt="Delivery Experience"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <p className="font-bold text-lg">Envío Gratis en tu primer pedido</p>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-200/30 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionDelivery;
