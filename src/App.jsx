import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
function App() {


  return (
    <>
    <section id="Homepage"> 
    <Navbar />
    <Hero />
    </section>
     <section id="Portfolio"><Parallax type="portfolio"/></section>
     <Portfolio />
     <section id="About me"><Parallax type="aboutMe"/></section> 
    </>
  )
}

export default App
