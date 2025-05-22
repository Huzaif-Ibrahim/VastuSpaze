import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Reviews from './Components/Reviews'
import ServicesSection from './Components/ServicesSection'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-6xl mx-auto'>
        <div id="home"><HeroSection/></div>
        <div id="services"><ServicesSection/></div>
        <div id='portfolio'><Portfolio/></div>
        <div id="about"><About/></div>
        <div id="reviews"><Reviews/></div>
        <div id="contact"><Contact/></div> 
        <Footer/>
      </div>
    </>
  )
}

export default App