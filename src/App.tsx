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
        <section id="avaliacoes" className="border-t border-steel-800 bg-steel-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-steel-700 bg-steel-900/70 p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">Sua opinião importa</p>
              <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">Como foi sua experiência na oficina?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-steel-300">Conte no Google o que achou do atendimento e do serviço. Sua avaliação ajuda outros motoristas a encontrar uma oficina de confiança.</p>
              <div className="mt-6 flex justify-center gap-2 text-3xl text-amber-400" aria-label="Avalie com até cinco estrelas">
                <span aria-hidden="true">★ ★ ★ ★ ★</span>
              </div>
              <a href="https://www.google.com/maps/place/Oficina+Manzini+-+Mec%C3%A2nica+%26+Solda/@-23.0201632,-47.4954854,17z/data=!3m1!4b1!4m6!3m5!1s0x94c61d00614a0ea5:0x21265862a6b86509!8m2!3d-23.0201632!4d-47.4954854!16s%2Fg%2F11xlb11vch?entry=ttu" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-4 font-bold text-steel-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-steel-900">
                Avaliar no Google <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-4 text-sm text-steel-400">O Google abrirá as opções para escolher as estrelas e escrever seu comentário.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
