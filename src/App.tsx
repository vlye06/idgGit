import { LanguageProvider } from "./context/LanguageContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Partners } from "./components/Partners";
import { About } from "./components/About";
import { Values } from "./components/Values";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Services />
        <WhyUs />
        <Partners />
        <About />
        <Values />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
