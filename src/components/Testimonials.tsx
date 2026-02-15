import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
    name: string;
    rating: number;
    text: string;
    source: string;
    image: string;
}

const reviews: Review[] = [
    {
        name: "Carlos M.",
        rating: 5,
        text: "¡El mejor pollo a la brasa que he probado! La piel es súper crujiente y las papas son otro nivel.",
        source: "Google Reviews",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "María F.",
        rating: 5,
        text: "Pedí delivery y llegó súper rápido y caliente. Muy recomendado para los domingos familiares.",
        source: "Facebook",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Jorge L.",
        rating: 4,
        text: "El ambiente en el local es muy agradable, perfecto para ir con amigos. La atención 10/10.",
        source: "Instagram",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

const Testimonials: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 text-gray-900"
                >
                    Lo que dicen nuestros clientes
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex gap-1 text-orange-500 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 flex-grow">"{review.text}"</p>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-100"
                                    />
                                    <span className="font-bold text-gray-900">{review.name}</span>
                                </div>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{review.source}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
