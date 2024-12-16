
import Navbar from "./components/header";
import Hero from "./components/hero";
import About from "./components/about/about";

import Carlist from "./components/carlist/carlist";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
   
    <Carlist/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </div>
  );
}
