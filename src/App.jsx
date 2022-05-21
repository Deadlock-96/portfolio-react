import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Service from './components/service/service'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contacts/contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App