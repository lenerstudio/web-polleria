import React from 'react';
import { CalendarCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionReservationProps {
    onReserveClick: () => void;
}

const SectionReservation: React.FC<SectionReservationProps> = ({ onReserveClick }) => {
    return (
        <section className="py-20 bg-stone-900 text-white relative flex flex-col items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center z-10"
            >
                <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4 block">Experiencia Presencial</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                    Vive momentos <span className="text-orange-500 italic">inolvidables</span>
                </h2>
                <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Celebra con amigos y familia en nuestro restaurante. Ambiente acogedor, música suave y la mejor atención personalizada.
                </p>

                <div className="flex justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onReserveClick}
                        className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold shadow-lg shadow-orange-600/30 transition-shadow flex items-center gap-2"
                    >
                        Reservar Mesa <CalendarCheck className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-transparent border border-stone-600 hover:bg-stone-800 text-stone-200 rounded-full font-bold transition-colors flex items-center gap-2"
                    >
                        Eventos Privados <Users className="w-5 h-5" />
                    </motion.button>
                </div>
            </motion.div>

            {/* Decorative background image blended */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/img/image-40.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
        </section>
    );
};

export default SectionReservation;
