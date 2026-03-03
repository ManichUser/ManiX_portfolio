import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import FallingLines from "./components/FallingLines";
import Footer from "@/app/components/Footer";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />

      {/* Hero HORS du Layout — plein écran sans contrainte */}
      <Hero />

      <Layout>
        <FallingLines />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
      </Layout>

      <Footer />
    </main>
  );
}