import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Exprience from './components/exprience/experience'
import Service from './components/service/service'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contacts/contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Exprience />
        <Service />
        <Portfolio />
        <Testimonial/>
        <Contact />
        <Footer />
    </>
  )
}

export default App