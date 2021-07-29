import React, { Component } from 'react';
import BodyLeft from "./BodyLeft.js";
import BodyRight from "./BodyRight";



export default class HomePage extends Component {
    render() {
        return (
            <>
        
      <div className="container my-3 my-sm-5">
        <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
            <BodyLeft />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <BodyRight />
           </div> 
        </div>
      </div>
      
            </>
        )
    }
}
