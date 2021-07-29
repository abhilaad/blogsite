import React from "react";
import BodyRightHelper from "./BodyRightHelper";

export default function BodyRight() {
  const color = ["primary ", "success ", "danger ", "warning ", "info "];
  const tag = ['tag','longtag','verylong','tag','longtag','verylong','tag','longtag','verylong',];

  return (
    <div>
      <aside>
        <h2 className="mb-3">Popular posts</h2>
        <div className="list-group mb-3">
          <BodyRightHelper />
          <BodyRightHelper />
        </div>
        <h2 className="mb-3">Recent posts</h2>
        <div className="list-group mb-3">
          <BodyRightHelper />
          <BodyRightHelper />
        </div>
        <h2 className="mb-3">Categories</h2>
        <div className="list-group mb-3">
          {color.map((item, index) => {
            return (
              <button
                key={index}
                className={`list-group-item list-group-item-action bg-${item} text-white`}
              >
                Category
              </button>
            );
          })}
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Tag cloud</h5>
            {
              tag.map((item,index)=>{
                return <button key={index} className="badge badge-secondary">{item}</button>
              })
            }
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">About the blog</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              arcu bibendum massa euismod scelerisque. Morbi porttitor tellus
              tempor metus posuere dictum. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. <a href="#0">Read more...</a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body bg-light">
            <h5 className="card-title">Signup for our newsletter</h5>
            <form>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-left">
                    @
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  aria-describedby="addon-left"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}
