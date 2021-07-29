import React from 'react'


export default function GalleryHelper(props) {
    const {fig} = props;
    return (
        <div className="col-12 col-md-6 col-lg-4">
              <figure className="figure">
                <a href="#0">
                  <img
                    src={fig}
                    className="figure-img img-fluid img-thumbnail"
                    alt="Figure"
                  />
                </a>
                <figcaption className="figure-caption">
                  <h6>
                    <i className="fa fa-camera" aria-hidden="true" />
                    <span className="sr-only">Photo by:</span> Marc Johnson{" "}
                    <small>
                      <time dateTime="2017-03-04">(03-04-2017)</time>
                    </small>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    laoreet pellentesque lorem sed elementum.
                  </p>
                </figcaption>
              </figure>
            </div>
    )
}
