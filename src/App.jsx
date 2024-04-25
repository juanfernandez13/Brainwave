import Hero from "./components/Hero";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Princing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5,25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Princing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
