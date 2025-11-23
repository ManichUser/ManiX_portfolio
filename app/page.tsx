import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import FallingLines from "./components/FallingLines";

export default function Home() {
  return (
    <Layout>
      <FallingLines />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </Layout>
  );
}
