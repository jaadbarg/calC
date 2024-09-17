import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices'; // Import OurServices
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients'; // Import OurClients
import ExamPortfolio from './components/ExamPortfolio'; // Import ExamPortfolio
import FAQs from './components/FAQs';
// import Newsletter from './components/Newsletter';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <AboutUs />
      <OurServices /> {/* Include OurServices */}
      <ExamPortfolio /> {/* Include ExamPortfolio */}
      <Pricing />
      <Testimonials />
      <OurClients />
      <FAQs />
      {/* <Newsletter /> */}
      <ContactForm />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
