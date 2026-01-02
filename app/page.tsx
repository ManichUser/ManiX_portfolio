import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import FallingLines from "./components/FallingLines";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Layout>
      <FallingLines />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </Layout>
    <Footer/>
    </main>
  );
}
