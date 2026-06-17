import Hero from './components/hero';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import Skill from './components/skill';
import Service from './components/services';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal animation="fade-in">
        <Hero />
      </ScrollReveal>
      
      <ScrollReveal animation="slide-up">
        <About/>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <Skill />
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <Service />
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <Projects/>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <Contact/>
      </ScrollReveal>
    </>
  );
}
