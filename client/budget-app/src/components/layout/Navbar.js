import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div  >
        <nav style={{
        backgroundColor: "black",
        fontFamily: "georgia",
        color: "green"
      }}  >
          <div style={{
        
        fontFamily: "georgia",
        color: "green"
      }} >
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <header style={{
                
                color: "springgreen"
              }}
              >
                Head's Up</header>
              

            </Link>
            <iframe src="https://giphy.com/embed/26n3JcZS59xgsKXkI" width="100" height="100"  frameBorder="0"  ></iframe> 
          </div>
        </nav>
      </div>
      
    );
  }
}
export default Navbar;