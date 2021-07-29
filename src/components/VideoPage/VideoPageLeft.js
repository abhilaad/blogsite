import React from 'react'
import BodyLeftHelper from '../BodyLeftHelper'
import CommentSection from '../CommentSection'

export default function VideoPageLeft() {
    return (
        <div>
            <article className="mb-3">
  <header className="mb-2">
    <button className="badge badge-success">Category</button>
    <h1>Video blog post title</h1>
    <BodyLeftHelper />
  </header>
  <section id="main" className="mb-3">
    <div className="figure-img embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" title="Ignore" src="https://www.youtube.com/embed/NpEaa2P7qZI" allowFullScreen />
    </div>
    <figcaption className="figure-caption small mb-3">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet pellentesque lorem sed elementum.</p>
      <p className="mb-0"><i className="fa fa-video-camera" aria-hidden="true" /><span className="sr-only">Video by:</span> Artist Name</p>
    </figcaption>
    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor tellus tempor metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
  </section>
  <CommentSection />
</article>

        </div>
    )
}
