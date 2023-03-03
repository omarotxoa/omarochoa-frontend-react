import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import WorkPhilosophy from "./components/WorkPhilosophy";
import SelectedWorks from "./components/SelectedWorks";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Experience />
        <WorkPhilosophy />
        <SelectedWorks />
        <Contact />
      </main>
    </>
  )
}

export default App
