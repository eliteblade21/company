import AboutSection from '../components/landing/AboutSection';
import Footer from '../components/landing/Footer';
import HeroSection from '../components/landing/HeroSection';
import Navbar from '../components/landing/Navbar';
import QuoteForm from '../components/landing/QuoteForm';
import ReviewsSection from '../components/landing/ReviewsSection';
import ServicesSection from '../components/landing/ServicesSection';

export default function Home() {
  return (
    <div className="bg-background pt-[calc(28px+80px)] text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <QuoteForm />
      <Footer />
    </div>
  );
}
