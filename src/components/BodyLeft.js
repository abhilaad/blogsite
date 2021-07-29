import React from "react";
import BodyLeftHelper  from "./BodyLeftHelper";
import {Link} from "react-router-dom"

export default function BodyLeft() {
  return (
    <div>
      <h2 className="mb-3">Latest posts</h2>
      <article className="mb-3">
        <header className="mb-2">
          <button className="badge badge-primary">Category</button>
          <h1>
            <Link to="/textblog">Text blog post title</Link>
          </h1>
          <BodyLeftHelper />
          
        </header>
        <figure className="figure">
          <img
            src="http://placehold.it/800x600"
            className="figure-img img-fluid"
            alt="Figure"
          />
          <figcaption className="figure-caption small">
            <p className="mb-0">
              <i className="fa fa-camera" aria-hidden="true" />
              <span className="sr-only">Photo by:</span> Artist Name
            </p>
          </figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu
          bibendum massa euismod scelerisque. Morbi porttitor tellus tempor
          metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis
          in faucibus.
        </p>
        <Link to="/textblog" className="btn btn-primary">Read more
        </Link>
          
        
      </article>
      <hr />
      <article className="mb-3">
        <header className="mb-2">
          <button className="badge badge-success">Category</button>
          <h1>
            <Link to="/videoblog">Video blog post title</Link>
          </h1>
          <BodyLeftHelper />
        </header>
        <div className="figure-img embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            title="Ignore2"
            src="https://www.youtube.com/embed/NpEaa2P7qZI"
            allowFullScreen
          />
        </div>
        <figcaption className="figure-caption small mb-3">
          <p className="mb-0">
            <i className="fa fa-video-camera" aria-hidden="true" />
            <span className="sr-only">Video by:</span> Artist Name
          </p>
        </figcaption>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu
          bibendum massa euismod scelerisque. Morbi porttitor tellus tempor
          metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis
          in faucibus.
        </p>
        <Link to="/videoblog" className="btn btn-primary">Read more
        </Link>
      </article>
      <hr />
      
      <article className="mb-3">
        <header className="mb-2">
          <button className="badge badge-warning">Category</button>
          <h1>
            <Link to="/galleryblog">
              Photo gallery blog post title
            </Link>
          </h1>
          <BodyLeftHelper />
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu
          bibendum massa euismod scelerisque. Morbi porttitor tellus tempor
          metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis
          in faucibus.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <figure className="figure">
              <img
                src="http://placehold.it/600x450"
                className="img-fluid img-thumbnail"
                alt="Figure"
              />
            </figure>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <figure className="figure">
              <img
                src="http://placehold.it/600x450"
                className="img-fluid img-thumbnail"
                alt="Figure"
              />
            </figure>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <figure className="figure">
              <img
                src="http://placehold.it/600x450"
                className="img-fluid img-thumbnail"
                alt="Figure"
              />
            </figure>
          </div>
        </div>
        <Link to="/galleryblog" className="btn btn-primary">Read more
        </Link>
      </article>
      <hr />
      
      <nav aria-label="Blog pages">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <span className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </span>
          </li>
          <li className="page-item active">
            <a href="#0" className="page-link">
              1 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a href="#0" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#0" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#0" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="#0" className="page-link">
              5
            </a>
          </li>
          <li className="page-item">
            <a href="#0" className="page-link">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
