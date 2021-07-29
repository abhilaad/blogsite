import React, { Component } from 'react'

import TextPageLeft from './TextPageLeft'
import TextPageRight from './TextPageRight'


export default class TextPage extends Component {
    render() {
        return (
            <div>
                
                <div className="container my-3 my-sm-5">
                  <div className="row">
                  <div className="col-12 col-lg-8">
                      <TextPageLeft />
                      </div>
                      <div className="col-12 col-lg-4">
                      <TextPageRight />

                      </div>
                      
                      
                </div>
                </div>
             


            </div>
        )
    }
}
