import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Minus, Plus, Trash2, ArrowRight, ArrowLeft, ShoppingBag
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';

const CartPage: React.FC = () => {
    const navigate = useNavigate();
    const { items: cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    // We can use a constant for shipping or pull from context/config
    const shippingEstimate = 5.00;
    const total = cartTotal + shippingEstimate;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header Simplified */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium hidden sm:inline">Seguir comprando</span>
                    </Link>
                    <div className="text-xl font-bold">
                        POLLERÍA<span className="text-orange-600">DELUXE</span>
                    </div>
                    <div className="w-8"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 lg:py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <ShoppingBag className="w-8 h-8 text-orange-600" /> Tu Carrito
                </h1>

                {cartItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100"
                    >
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <ShoppingBag className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
                        <p className="text-gray-500 mb-8">¿Aún no te has decidido? ¡Nuestro menú te está esperando!</p>
                        <Link
                            to="/"
                            className="inline-flex px-8 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
                        >
                            Ver Menú
                        </Link>
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        {/* Cart Items List */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-grow space-y-4"
                        >
                            <AnimatePresence>
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        layout
                                        exit={{ opacity: 0, x: -50 }}
                                        className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
                                    >
                                        {/* Product Image */}
                                        <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-grow text-center sm:text-left w-full">
                                            <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                                            <span className="font-bold text-orange-600 text-lg sm:hidden">€ {item.price.toFixed(2)}</span>
                                        </div>

                                        {/* Controls */}
                                        <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-12">

                                            {/* Quantity */}
                                            <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1 border border-gray-200">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-orange-600 shadow-sm transition-colors border border-gray-100"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm transition-colors border border-gray-100"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Price Desktop */}
                                            <div className="hidden sm:block text-right min-w-[80px]">
                                                <span className="block font-bold text-gray-900 text-lg">€ {(item.price * item.quantity).toFixed(2)}</span>
                                                <span className="text-xs text-gray-400">€ {item.price.toFixed(2)} c/u</span>
                                            </div>

                                            {/* Delete */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-96 flex-shrink-0"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">Resumen</h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium">€ {cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Envío estimado</span>
                                        <span className="font-medium">€ {shippingEstimate.toFixed(2)}</span>
                                    </div>
                                    <div className="pt-3 border-t border-gray-100 flex justify-between items-end">
                                        <span className="text-lg font-bold text-gray-900">Total</span>
                                        <div className="text-right">
                                            <span className="block text-3xl font-extrabold text-orange-600 leading-none">€ {total.toFixed(2)}</span>
                                            <span className="text-xs text-gray-400">Incluye IGV</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/pedido')}
                                    className="w-full py-4 bg-gray-900 hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Finalizar Pedido <ArrowRight className="w-5 h-5" />
                                </button>

                                <div className="mt-6 text-center">
                                    <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 font-medium underline decoration-gray-300 hover:decoration-gray-900">
                                        O seguir comprando
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
