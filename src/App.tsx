import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vehicles from "@/components/Vehicles";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-steel-950 text-steel-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Vehicles />
        <Brands />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
