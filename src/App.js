import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
// import Newsletter from './components/Newsletter';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import OurClients from './components/OurClients'; // Import OurClients


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Pricing />
      <OurClients /> {/* Add OurClients here */}
      <Testimonials />
      <FAQs />
      {/* <Newsletter /> */}
      <ContactForm />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
