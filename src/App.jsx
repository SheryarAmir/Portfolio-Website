import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/AboutMe/About'
import Services from './Components/Services/Services'
import MyWork from './Components/WorkSection/MyWork'
import Contact from './Components/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Contact/>
    </>
  )
}

export default App;
