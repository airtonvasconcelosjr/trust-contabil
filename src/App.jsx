import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen bg-trust-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
