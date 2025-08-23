import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <h1 className="text-3xl font-bold flex-center col-ceter">
      Hello world!
    </h1>
  )
}

export default App