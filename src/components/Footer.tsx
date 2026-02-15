import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
    onOrderClick: () => void;
    onReserveClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOrderClick, onReserveClick }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4">

                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
                >

                    {/* Brand & Final CTA */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6 text-orange-500">POLLERÍA <span className="text-white">HERMANOS</span></h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Sabores que unen familias. La mejor experiencia en pollo a la brasa y parrillas.
                        </p>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={onOrderClick}
                                className="btn-primary w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-bold transition-colors"
                            >
                                Pedir Delivery
                            </button>
                            <button
                                onClick={onReserveClick}
                                className="btn-secondary w-full py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-bold transition-colors"
                            >
                                Reservar Mesa
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 text-white">Contáctanos</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                                <span>Av. Principal 123, Macarena,<br />Sevilla, España</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-orange-500 transition-colors cursor-pointer">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>+34 687 654 321</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-orange-500 transition-colors cursor-pointer">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>contacto@pollerihermanos.com</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Hours */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 text-white">Horarios</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Lunes - Jueves</span>
                                <span>12:00 PM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Viernes - Sábado</span>
                                <span className="text-orange-500 font-bold">12:00 PM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Domingo</span>
                                <span>12:00 PM - 10:00 PM</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Map */}
                    <motion.div variants={itemVariants} className="bg-gray-800 rounded-xl overflow-hidden h-64 md:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d67031.51269764504!2d-6.025491778071681!3d37.41543451671902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1771115585233!5m2!1ses!2ses"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={undefined}
                            loading="lazy"
                            title="Google Map"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </motion.div>

                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 text-sm">© 2026 Pollería Deluxe - Todos los derechos reservados - Desing: LenerStudio.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
