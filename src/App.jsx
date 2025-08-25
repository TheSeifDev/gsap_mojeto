import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Smoothies from './components/Smoothies';
import About from './components/About';
import Art from './components/Art';
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Smoothies />
      <About />
      <Art />
    </main>
  )
}

export default App