import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Parallax from './parallax/Parallax'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Cursor from './cursor/Cursor'

export default function Homepage() {
  return (
    <>
    <Cursor />
    <section id="Homepage"> 
    <Navbar />
    <Hero />
    </section>
     <section id="Portfolio"><Parallax type="portfolio"/></section>
     <Portfolio />
     <section id="Contact"><Parallax type="contact"/>
     </section> 
     <section>
     <Contact />
     </section>
    </>
  )
}
