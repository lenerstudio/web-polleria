import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Users, Clock, User, Phone, Mail, FileText,
    Check, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Types
interface ReservationState {
    date: Date;
    guests: number;
    time: string | null;
    name: string;
    email: string;
    phone: string;
    notes: string;
}

const steps = [
    { id: 1, title: 'Detalles' },
    { id: 2, title: 'Datos' },
    { id: 3, title: 'Confirmación' }
];

const availableTimes = [
    '13:00', '13:30', '14:00', '14:30', '15:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

const ReservationPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<ReservationState>({
        date: new Date(),
        guests: 2,
        time: null,
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const handleDateChange = (increment: number) => {
        const newDate = new Date(formData.date);
        newDate.setDate(newDate.getDate() + increment);
        if (newDate >= new Date(new Date().setHours(0, 0, 0, 0))) {
            setFormData({ ...formData, date: newDate, time: null });
        }
    };

    const isStep1Valid = !!formData.time;
    const isStep2Valid = formData.name && formData.email && formData.phone;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*Nueva Reserva*
📅 Fecha: ${formData.date.toLocaleDateString()}
⏰ Hora: ${formData.time}
👥 Personas: ${formData.guests}
👤 Nombre: ${formData.name}
📧 Email: ${formData.email}
📞 Teléfono: ${formData.phone}
📝 Notas: ${formData.notes || 'Ninguna'}`;

        const whatsappUrl = `https://wa.me/34624432245?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setStep(3);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Nav Header */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Volver al inicio</span>
                    </Link>
                    <div className="text-xl font-bold">
                        POLLERÍA<span className="text-orange-600">DELUXE</span>
                    </div>
                    <div className="w-24"></div> {/* Spacer for centering */}
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 lg:py-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12"
                >

                    {/* Main Content Area */}
                    <div className="flex-grow lg:w-2/3">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Reservar Mesa</h1>
                        <p className="text-gray-500 mb-8">Disfruta de una experiencia gastronómica inolvidable.</p>

                        {/* Progress Steps */}
                        {step < 3 && (
                            <div className="flex items-center mb-8 bg-gray-50 p-4 rounded-xl">
                                {steps.map((s, idx) => (
                                    <React.Fragment key={s.id}>
                                        <div className={`flex items-center gap-2 ${step >= s.id ? 'text-orange-600 font-bold' : 'text-gray-400'}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= s.id ? 'border-orange-600 bg-orange-50' : 'border-gray-300'}`}>
                                                {step > s.id ? <Check className="w-4 h-4" /> : s.id}
                                            </div>
                                            <span className="hidden sm:inline">{s.title}</span>
                                        </div>
                                        {idx < steps.length - 1 && (
                                            <div className={`h-0.5 flex-grow mx-4 ${step > s.id ? 'bg-orange-600' : 'bg-gray-200'}`} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    {/* Guests Selector */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold">Número de Personas</h3>
                                        </div>
                                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                <button
                                                    key={num}
                                                    onClick={() => setFormData({ ...formData, guests: num })}
                                                    className={`w-12 h-12 rounded-full font-bold flex-shrink-0 transition-all ${formData.guests === num
                                                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {num}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Date Selector */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold">Fecha</h3>
                                        </div>
                                        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                                            <button onClick={() => handleDateChange(-1)} className="p-2 hover:bg-white rounded-lg transition-colors shadow-sm">
                                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                                            </button>
                                            <div className="text-center">
                                                <span className="block text-sm text-gray-500 uppercase tracking-wide font-bold">
                                                    {formData.date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                                                </span>
                                                <span className="text-3xl font-bold text-gray-900 capitalize">
                                                    {formData.date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric' })}
                                                </span>
                                            </div>
                                            <button onClick={() => handleDateChange(1)} className="p-2 hover:bg-white rounded-lg transition-colors shadow-sm">
                                                <ChevronRight className="w-5 h-5 text-gray-600" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Time Selector */}
                                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold">Horario</h3>
                                        </div>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                            {availableTimes.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => setFormData({ ...formData, time })}
                                                    className={`py-2 px-3 rounded-lg font-medium text-sm transition-all border ${formData.time === time
                                                        ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                                                        : 'bg-white text-gray-700 border-gray-200 hover:border-orange-500 hover:text-orange-600'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <button
                                            onClick={() => isStep1Valid && setStep(2)}
                                            disabled={!isStep1Valid}
                                            className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${isStep1Valid
                                                ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
                                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            Continuar <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6"
                                >
                                    <h3 className="text-2xl font-bold mb-6">Tus Datos</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                                <User className="w-4 h-4 text-orange-600" /> Nombre Completo
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                                placeholder="Ej. Juan Pérez"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-orange-600" /> Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                                placeholder="Ej. juan@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-orange-600" /> Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                                placeholder="Ej. 987 654 321"
                                            />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-orange-600" /> Peticiones Especiales (Opcional)
                                            </label>
                                            <textarea
                                                value={formData.notes}
                                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all h-24"
                                                placeholder="¿Alergias? ¿Es un cumpleaños? Cuéntanos..."
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-6 border-t border-gray-100">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            Atrás
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            disabled={!isStep2Valid}
                                            className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${isStep2Valid
                                                ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20'
                                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            Confirmar Reserva
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-12 h-12" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">¡Reserva Confirmada!</h2>
                                    <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                        Gracias {formData.name}, hemos enviado un correo de confirmación a {formData.email}. Te esperamos el {formData.date.toLocaleDateString()} a las {formData.time}.
                                    </p>
                                    <Link
                                        to="/"
                                        className="inline-flex px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-orange-700 transition-all"
                                    >
                                        Volver al Inicio
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Summary Sidebar - Only show for step 1 & 2 */}
                    {step < 3 && (
                        <div className="lg:w-1/3 mt-8 lg:mt-0">
                            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-gray-200">
                                <h3 className="text-xl font-bold mb-6 text-gray-800">Resumen de Reserva</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Fecha</p>
                                            <p className="font-medium text-gray-900 capitalize">
                                                {formData.date.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Hora</p>
                                            <p className="font-medium text-gray-900">
                                                {formData.time || <span className="text-gray-400 italic">Por seleccionar</span>}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Personas</p>
                                            <p className="font-medium text-gray-900">{formData.guests} Comensales</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                                        Al reservar, aceptas nuestras políticas de cancelación y privacidad. Te contactaremos para confirmar disponibilidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ReservationPage;
