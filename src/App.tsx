import { useProyectos, useReveal } from '@/hooks/useProyectos';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BrandStatement from '@/components/BrandStatement';
import BusinessTypes from '@/components/BusinessTypes';
import HowWeWork from '@/components/HowWeWork';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function App() {
  const { proyectos, loading } = useProyectos();
  useReveal();

  return (
    <div className="relative min-h-screen bg-enlace-blue text-white">
      <div className="noise-overlay" />
      <Header />
      <main>
        <Hero proyectos={proyectos} loading={loading} />
        <Services />
        <BrandStatement />
        <BusinessTypes />
        <HowWeWork />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
