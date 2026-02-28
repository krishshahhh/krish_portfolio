import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Projects from "./component/Projects";
import Resources from "./component/Resources";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <Main/>

      <hr />

      <Projects/> 
      <hr />
      <Resources/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
