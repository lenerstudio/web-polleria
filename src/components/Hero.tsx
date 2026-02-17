import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';

interface HeroProps {
    onOrderClick: () => void;
    onReserveClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick, onReserveClick }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="inicio" className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/img/image-4.jpg')", // Using a high-quality food image
                    y
                }}
            >
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/90 to-transparent" />
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-600/90 text-sm font-semibold mb-4 backdrop-blur-sm">
                        🔥 El mejor sabor de la ciudad
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Experiencia Gastronómica <br />
                        <span className="text-orange-500">Inolvidable</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Ingredientes frescos, recetas tradicionales y un ambiente único.
                        Disfruta de nuestros platos en casa o vive la experiencia en nuestro local.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={onOrderClick}
                            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
                        >
                            Pedir Ahora <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onReserveClick}
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-bold text-lg backdrop-blur-md transition-all flex items-center justify-center gap-2"
                        >
                            Reservar Mesa <CalendarDays className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
