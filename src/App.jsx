import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Figures from "./components/Figures.jsx";
import About from "./components/About.jsx";
import Framework from "./components/Framework.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap">
          <Hero />
          <Figures />
          <About />
        </div>
        <Framework />
        <div className="wrap">
          <Services />
          <Contact />
        </div>
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
