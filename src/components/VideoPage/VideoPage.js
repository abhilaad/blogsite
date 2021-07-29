import React, { Component } from "react";
import TextPageRight from "../TextPage/TextPageRight";
import VideoPageLeft from "./VideoPageLeft";

export default class VideoPage extends Component {
  render() {
    return (
      <div className="container my-3 my-sm-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <VideoPageLeft />
          </div>
          <div className="col-12 col-lg-4">
            <TextPageRight />
          </div>
        </div>
      </div>
    );
  }
}
