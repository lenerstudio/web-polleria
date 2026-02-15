import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import IntentSelector from './components/IntentSelector';
import ValueProps from './components/ValueProps';
import SectionDelivery from './components/SectionDelivery';
import SectionReservation from './components/SectionReservation';
import Menu from './components/Menu';
import PromoSection from './components/PromoSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ReservationPage from './ReservationPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

// ... (previous imports)

import { CartProvider, useCart } from './context/CartContext';

// ... (previous imports)

const LandingPage = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    navigate('/reservar');
  };

  const goToCart = () => {
    navigate('/carrito');
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header
        onOrderClick={goToCart}
        onReserveClick={handleReserveClick}
        cartCount={cartCount}
      />

      <main>
        <Hero
          onOrderClick={() => scrollToSection('menu')}
          onReserveClick={handleReserveClick}
        />

        <IntentSelector
          onSelectDelivery={() => scrollToSection('delivery-section')}
          onSelectDineIn={handleReserveClick}
        />

        <ValueProps />

        <div id="delivery-section">
          <SectionDelivery onOrderClick={() => scrollToSection('menu')} />
        </div>

        <div id="reservation-section">
          <SectionReservation onReserveClick={handleReserveClick} />
        </div>

        {/* Menu will now handle adding to cart internally via context */}
        <Menu onAddToCart={() => { }} />

        <PromoSection />

        <HowItWorks />

        <Testimonials />

      </main>

      <Footer
        onOrderClick={() => scrollToSection('menu')}
        onReserveClick={handleReserveClick}
      />

      <FloatingWhatsApp />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservar" element={<ReservationPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/pedido" element={<CheckoutPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
