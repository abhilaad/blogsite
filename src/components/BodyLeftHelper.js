import React from 'react'

export default function BodyLeftHelper() {
    return (
        <>
            <div>Author Name</div>
          <div className="small">
            Posted on:{" "}
            <time dateTime="2017-03-12T10:24">Jul 12, 2020 at 10:24 AM</time>
          </div>
          <div className="small">
            <span className="badge badge-primary">
              <i className="fa fa-thumbs-up" aria-hidden="true" /> 13{" "}
              <span className="sr-only">likes</span>
            </span>{" "}
            <span className="badge badge-primary">
              <i className="fa fa-comments" aria-hidden="true" /> 3{" "}
              <span className="sr-only">comments</span>
            </span>
          </div>
          <div className="small">
            <button className="badge badge-secondary">#tag</button>
            <button className="badge badge-secondary">#longtag</button>
            <button className="badge badge-secondary">#tag</button>
            <button className="badge badge-secondary">#longertag</button>
            <button className="badge badge-secondary">#tag</button>
            <button className="badge badge-secondary">#verylongtag</button>
          </div>
        </>
    )
}
