import React from 'react'
import faker from 'faker'

export default function CommentSection() {
    
    return (
        <section id="comments" className="small">
      <button className="btn btn-lg btn-primary mb-3"><i className="fa fa-thumbs-up" aria-hidden="true" /> <span className="sr-only">Like</span></button>
      <h2>Comments</h2> 
      <div className="media">
        <img src={faker.image.avatar()} alt="Media object" className="mr-3" />
        <div className="media-body"> 
          <p>{faker.name.lastName()} (Posted on: {faker.address.timeZone()})</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor tellus tempor metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>      
      <hr />
      <div className="media">
        <img src={faker.image.avatar()} alt="Media object" className="mr-3" />
        <div className="media-body">
          <p><a href="mailto:example@domain.com">Author Name</a> (Posted on: <time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor tellus tempor metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <div className="media">
            <img src={faker.image.avatar()} alt="Media object" className="mr-3" />
            <div className="media-body">
              <p><a href="mailto:example@domain.com">Author Name</a> (Posted on: <time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor tellus tempor metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
          <div className="media mt-1">
            <img src={faker.image.avatar()} alt="Media object" className="mr-3" />
            <div className="media-body">
              <p><a href="mailto:example@domain.com">Author Name</a> (Posted on: <time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor tellus tempor metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <form>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" placeholder="example@email.com" id="email" name="email" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Your comment:</label>
          <textarea className="form-control" id="comment" name="comment" rows={5} placeholder="Write your comment here. Maximum 500 characters." required defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-danger">Reset</button>
      </form>
    </section>
    )
}
