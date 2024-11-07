
import Hero from '../app/componenets/hero';
import About from './componenets/about';
import Projects from './componenets/project';

import Contact from './componenets/contact';
import Skill from './componenets/skill';
import Service from './componenets/services';


export default function Home() {
  return (
    <>
      
      <Hero />
      <About/>
      <Skill />
      <Service />
      <Projects/>
      <Contact/>
     
     
    </>
  );
}
