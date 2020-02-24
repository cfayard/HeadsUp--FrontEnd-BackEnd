import React, { Component } from "react";


import Chart from '../Chart';



class Visual extends Component {
  render() {
    return (
        <div style={{
            paddingTop:100
        }}>
            <a href="./Budget">
                <button className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Budget
                    
                </button>
            </a>
            <Chart />
        </div>
    );
  }
}
export default Visual;