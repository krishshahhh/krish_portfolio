import React from "react";
import "./main.css";

const Main = () => {
  return (
    <section className="hero">
      <h1>
        Hey, I’m <span className="blue">Krish</span>.
      </h1>

      <p>
        I’m here for one reason — <span className="green">to learn</span> and{" "}
        <span className="green">to build</span>.  
        I don’t chase money, titles, or shortcuts.  
        I <span className="yellow">show up</span>, write code,
        break things, fix them — and push every project
        <span className="blue"> to the next level</span>.
      </p>

      <p>
        <span className="yellow">Small mistakes?</span>  
        They don’t stop me — they make me
        <span className="green"> stronger</span>.  
        Real growth happens when nobody is watching,
        and you still stay
        <span className="blue"> consistent and focused</span>.
      </p>
    </section>
  );
};

export default Main;