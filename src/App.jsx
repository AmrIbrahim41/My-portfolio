import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  )
}

export default App
