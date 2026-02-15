import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Utensils } from 'lucide-react';

interface IntentSelectorProps {
    onSelectDelivery: () => void;
    onSelectDineIn: () => void;
}

const IntentSelector: React.FC<IntentSelectorProps> = ({ onSelectDelivery, onSelectDineIn }) => {
    return (
        <section className="py-12 bg-gray-100 flex items-center justify-center">
            <div className="container px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-8 text-gray-800"
                >
                    ¿Cómo prefieres disfrutar hoy?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Delivery Option */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group cursor-pointer rounded-2xl overflow-hidden shadow-2xl relative h-64 md:h-80"
                        onClick={onSelectDelivery}
                    >
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />
                        <img
                            src="/img/image-28.jpeg"
                            alt="Delivery"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
                            <Truck className="w-16 h-16 md:w-20 md:h-20 mb-4 bg-orange-600 p-3 rounded-full" />
                            <h3 className="text-2xl md:text-3xl font-bold">Delivery</h3>
                            <p className="text-sm md:text-base opacity-80 mt-2">En la comodidad de tu casa</p>
                        </div>
                    </motion.div>

                    {/* Dine In Option */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group cursor-pointer rounded-2xl overflow-hidden shadow-2xl relative h-64 md:h-80"
                        onClick={onSelectDineIn}
                    >
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />
                        <img
                            src="/img/image-30.jpeg"
                            alt="Reservar Mesa"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
                            <Utensils className="w-16 h-16 md:w-20 md:h-20 mb-4 bg-blue-600 p-3 rounded-full" />
                            <h3 className="text-2xl md:text-3xl font-bold">Reservar Mesa</h3>
                            <p className="text-sm md:text-base opacity-80 mt-2">Ven a nuestro local</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntentSelector;
