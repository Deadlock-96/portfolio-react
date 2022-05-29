import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Exprience from "./components/exprience/experience";
// import WorkExprience from './components/work_experience'
// import Service from './components/service/service'
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <div className="content">
        <div className="sun">
          <div className="shadow"></div>
        </div>
      </div>

      {/* <div class="snowflakes" aria-hidden="true">
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div> */}

      {/* </div> */}
      <Header />
      <Nav />
      <About />
      <Exprience />
      {/* <Service /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
