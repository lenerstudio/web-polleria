import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin, Phone, StickyNote, CreditCard, Banknote, Smartphone,
    ArrowLeft, Check, ShoppingBag, Loader2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';

const shippingCost = 5.00;

type PaymentMethod = 'cash' | 'card_terminal' | 'online' | 'bizum' | 'yape';

const CheckoutPage: React.FC = () => {
    const { items: cartItems, clearCart, cartTotal } = useCart();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('online');

    // Form State
    const [formData, setFormData] = useState({
        address: '',
        city: 'Lima',
        phone: '',
        notes: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: ''
    });

    const total = cartTotal + shippingCost;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setCompleted(true);
        clearCart(); // Clear cart after successful order
    };

    if (completed) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Pedido Recibido!</h2>
                    <p className="text-gray-500 mb-8">
                        Tu pedido ha sido procesado correctamente. En breve recibirás un mensaje de confirmación.
                    </p>
                    <Link
                        to="/"
                        className="block w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all"
                    >
                        Volver al Inicio
                    </Link>
                </motion.div>
            </div>
        );
    }

    // Redirect if cart is empty and not completed
    if (cartItems.length === 0 && !completed) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
                <Link to="/" className="text-red-600 hover:underline">Volver al menú</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header Simplified */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/carrito" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Volver al carrito</span>
                    </Link>
                    <div className="text-xl font-bold">
                        POLLERÍA<span className="text-red-600">DELUXE</span>
                    </div>
                    <div className="w-6"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Pedido</h1>

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Column: Delivery & Payment */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-grow space-y-8"
                    >
                        {/* Delivery Section */}
                        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-gray-800">
                                <MapPin className="w-5 h-5 text-red-600" /> Dirección de Entrega
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Dirección Exacta</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        placeholder="Av. Principal 123, Dpto 401"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="987 654 321"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Notas para el repartidor (Opcional)</label>
                                    <div className="relative">
                                        <StickyNote className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                                        <textarea
                                            name="notes"
                                            placeholder="El timbre no funciona, dejar en recepción..."
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all h-24 resize-none"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Payment Section */}
                        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-gray-800">
                                <CreditCard className="w-5 h-5 text-red-600" /> Método de Pago
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <PaymentOption
                                    id="card_terminal"
                                    title="Tarjeta (POS)"
                                    desc="El repartidor tiene POS"
                                    icon={CreditCard}
                                    selected={paymentMethod === 'card_terminal'}
                                    onSelect={() => setPaymentMethod('card_terminal')}
                                />
                                <PaymentOption
                                    id="cash"
                                    title="Efectivo"
                                    desc="Paga al recibir"
                                    icon={Banknote}
                                    selected={paymentMethod === 'cash'}
                                    onSelect={() => setPaymentMethod('cash')}
                                />
                                <PaymentOption
                                    id="online"
                                    title="Pago Online"
                                    desc="Tarjeta Crédito/Débito"
                                    icon={CreditCard}
                                    selected={paymentMethod === 'online'}
                                    onSelect={() => setPaymentMethod('online')}
                                />
                                <PaymentOption
                                    id="yape"
                                    title="Yape / Plin"
                                    desc="Pago QR rápido"
                                    icon={Smartphone}
                                    selected={paymentMethod === 'yape'} // Context adapted for Peru
                                    onSelect={() => setPaymentMethod('yape')}
                                />
                            </div>

                            {/* Online Payment Details Animation */}
                            <AnimatePresence>
                                {paymentMethod === 'online' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Número de Tarjeta</label>
                                                <input
                                                    type="text"
                                                    placeholder="0000 0000 0000 0000"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Expiración (MM/YY)</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                                                <input
                                                    type="text"
                                                    placeholder="123"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    </motion.div>

                    {/* Right Column: Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/3 flex-shrink-0"
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-gray-800">
                                <ShoppingBag className="w-5 h-5 text-red-600" /> Resumen del Pedido
                            </h2>

                            <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar mb-6">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-gray-900 text-sm line-clamp-2">{item.name}</h4>
                                                <span className="font-bold text-gray-900">S/ {(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">Cant: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>S/ {cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Envío</span>
                                    <span>S/ {shippingCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-900 font-extrabold text-2xl pt-2 mt-2 border-t border-gray-100">
                                    <span>Total</span>
                                    <span>S/ {total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
                                    </>
                                ) : (
                                    <>Confirmar y Pagar</>
                                )}
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Transacción segura y encriptada
                            </p>
                        </div>
                    </motion.div>
                </form>
            </div>
        </div>
    );
};

// Helper Component for Payment Options
const PaymentOption = ({ id, title, desc, icon: Icon, selected, onSelect }: any) => (
    <div
        onClick={onSelect}
        className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-start gap-4 ${selected
                ? 'border-red-600 bg-red-50'
                : 'border-gray-100 bg-gray-50 hover:border-red-200'
            }`}
    >
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${selected ? 'border-red-600' : 'border-gray-300'
            }`}>
            {selected && <div className="w-2.5 h-2.5 bg-red-600 rounded-full" />}
        </div>
        <div>
            <div className="font-bold text-gray-900 flex items-center gap-2">
                {title} <Icon className="w-4 h-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    </div>
);

export default CheckoutPage;
