import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import DrawingOffice from "./components/DrawingOffice";
import About from "./components/About";
import Sectors from "./components/Sectors";
import ProjectFlow from "./components/ProjectFlow";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Products />
        <DrawingOffice />
        <About />
        <Sectors />
        <ProjectFlow />
        <Contact />
      </main>
    </>
  );
}
