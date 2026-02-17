import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ChefHat, Leaf, LucideIcon } from 'lucide-react';

interface Benefit {
    icon: LucideIcon;
    title: string;
    desc: string;
}

const ValueProps: React.FC = () => {
    const benefits: Benefit[] = [
        {
            icon: Clock,
            title: "Entrega Rápida",
            desc: "Tu pedido llega caliente y a tiempo."
        },
        {
            icon: Star,
            title: "Calidad Premium",
            desc: "Ingredientes frescos seleccionados a diario."
        },
        {
            icon: ChefHat,
            title: "Recetas Originales",
            desc: "Sabor único que nos ha hecho famosos."
        },
        {
            icon: Leaf,
            title: "Opciones Frescas",
            desc: "Variedad para todos los gustos."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="nosotros" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProps;
