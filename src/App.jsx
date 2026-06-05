import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
    return (
        <>
            <Preloader />
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Process />
            <Partners />
            <CTA />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}
