import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

interface MenuItem {
    id: number;
    name: string;
    desc: string;
    price: string;
    image: string;
    tag: string | null;
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Pollo a la Brasa Clásico",
        desc: "1/4 de pollo con papas fritas doradas y ensalada fresca.",
        price: "€ 24.90",
        image: "/img/image-1.jpg",
        tag: "Más Pedido"
    },
    {
        id: 2,
        name: "Parrillada Mixta",
        desc: "Chuleta, anticucho, chorizo y panceta con papas.",
        price: "€ 45.00",
        image: "/img/image-11.jpeg",
        tag: "Recomendado"
    },
    {
        id: 3,
        name: "Alitas BBQ",
        desc: "12 alitas bañadas en nuestra salsa secreta BBQ.",
        price: "€ 28.50",
        image: "/img/image-16.jpg",
        tag: null
    },
    {
        id: 4,
        name: "Lomo Saltado",
        desc: "Tradicional lomo fino salteado al wok con papas.",
        price: "€ 38.00",
        image: "/img/image-12.jpeg",
        tag: null
    },
    {
        id: 5,
        name: "Anticuchos de Corazón",
        desc: "3 palos de puro corazón con papas doradas y choclo.",
        price: "€ 22.00",
        image: "/img/image-20.jpg", // Placeholder
        tag: "Clásico"
    },
    {
        id: 6,
        name: "Chaufa de Pollo",
        desc: "Arroz chaufa al estilo oriental con trozos de pollo.",
        price: "€ 20.00",
        image: "/img/image-6.jpg",
        tag: null
    }
];

interface MenuProps {
    onAddToCart: () => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddItem = (item: MenuItem) => {
        const numericPrice = parseFloat(item.price.replace('€ ', ''));
        addToCart({
            id: item.id,
            name: item.name,
            price: numericPrice,
            image: item.image,
            description: item.desc
        });
        if (onAddToCart) onAddToCart();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-16 bg-white" id="menu">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2 block">Nuestra Carta</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Platos Destacados</h2>
                    <p className="text-gray-500 mt-2">Los favoritos de nuestros clientes, listos para ti.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-lg transition-shadow overflow-hidden border border-gray-100 group flex flex-col h-full"
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {item.tag && (
                                    <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {item.tag}
                                    </span>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                                    <span className="text-orange-600 font-bold text-lg whitespace-nowrap">{item.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">{item.desc}</p>

                                <div className="flex gap-2 mt-auto">
                                    <button
                                        onClick={() => handleAddItem(item)}
                                        className="flex-1 py-3 bg-gray-900 hover:bg-orange-600 active:bg-orange-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Plus className="w-5 h-5" /> Agregar al Pedido
                                    </button>
                                    <button
                                        onClick={() => navigate('/carrito')}
                                        className="px-4 py-3 bg-gray-100 hover:bg-gray-200 active:bg-orange-600 active:text-white text-gray-900 rounded-xl font-bold transition-colors flex items-center justify-center border border-gray-200"
                                        aria-label="Ir al carrito"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full font-bold transition-colors"
                    >
                        Ver Menú Completo
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
