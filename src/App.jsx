import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
// import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import Spices from "./components/Spices";
import AboutUs from "./components/AboutUs";
import Form from "./components/Form"
import TestimonialCarousel from "./components/TestimonialCarousel";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-950 antialiased">
      <HeroSection />
      <NavBar />
      <AboutUs />
      <Spices />
      <Services />
      <TestimonialCarousel />
      <Form />
      {/* <Blogs /> */}
     
      <Footer />
      <Analytics />
    </main>
  );
};

export default App;
