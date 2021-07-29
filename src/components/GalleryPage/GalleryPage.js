import React, { Component } from 'react'
import TextPageRight from '../TextPage/TextPageRight'
import GalleryPageLeft from './GalleryPageLeft'

export default class GalleryPage extends Component {
    render() {
        return (
            <div className="container my-3 my-sm-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <GalleryPageLeft />
          </div>
          <div className="col-12 col-lg-4">
            <TextPageRight />
          </div>
        </div>
      </div>
        )
    }
}
