import React from 'react';
import { Truck, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
    const stepVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900">¿Cómo Funciona?</h2>
                    <p className="text-gray-500 mt-2">Es muy sencillo disfrutar con nosotros</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Delivery Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-orange-100"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6 mx-auto">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Para Delivery</h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8 relative"
                        >
                            {/* Step 1 */}
                            <motion.div variants={stepVariants} className="flex items-start gap-4 z-10 relative">
                                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Elige tus favoritos</h4>
                                    <p className="text-gray-500 text-sm">Explora nuestro menú y selecciona lo que más te provoque.</p>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div variants={stepVariants} className="flex items-start gap-4 z-10 relative">
                                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Realiza tu pedido</h4>
                                    <p className="text-gray-500 text-sm">Completa tus datos y paga de forma segura o contra entrega.</p>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div variants={stepVariants} className="flex items-start gap-4 z-10 relative">
                                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Recíbelo en casa</h4>
                                    <p className="text-gray-500 text-sm">Relájate, nosotros nos encargamos del resto rápidamente.</p>
                                </div>
                            </motion.div>

                            {/* Connecting line */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute left-5 top-4 bottom-4 w-0.5 bg-orange-100 -z-0 origin-top"
                                style={{ maxHeight: 'calc(100% - 32px)' }}
                            ></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Reservation Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-blue-100"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Para Reservas</h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8 relative"
                        >
                            {/* Step 1 */}
                            <motion.div variants={stepVariants} className="flex items-start gap-4 z-10 relative">
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Selecciona fecha y hora</h4>
                                    <p className="text-gray-500 text-sm">Dinos cuándo quieres visitarnos en nuestro calendario.</p>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div variants={stepVariants} className="flex items-start gap-4 z-10 relative">
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Indica personas</h4>
                                    <p className="text-gray-500 text-sm">¿Vienes en pareja, familia o con amigos?</p>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div variants={stepVariants} className="flex items-start gap-4 z-10 relative">
                                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Confirmación inmediata</h4>
                                    <p className="text-gray-500 text-sm">Recibe tu confirmación por WhatsApp al instante.</p>
                                </div>
                            </motion.div>

                            {/* Connecting line */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute left-5 top-4 bottom-4 w-0.5 bg-blue-100 -z-0 origin-top"
                                style={{ maxHeight: 'calc(100% - 32px)' }}
                            ></motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
