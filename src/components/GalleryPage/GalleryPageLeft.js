import React from "react";
import BodyLeftHelper from "../BodyLeftHelper";
import CommentSection from "../CommentSection";
import GalleryHelper from "./GalleryHelper";
import faker from 'faker'

export default function GalleryPageLeft() {
  return (
    <div>
      <article className="mb-3">
        <header className="mb-2">
          <button className="badge badge-success">Category</button>
          <h1>Photo gallery blog post title</h1>
          <BodyLeftHelper />
        </header>
        <section id="main" className="mb-3">
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            arcu bibendum massa euismod scelerisque. Morbi porttitor tellus
            tempor metus posuere dictum. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
          <div className="row">
            <GalleryHelper fig={faker.image.nature()}/>
            <GalleryHelper fig={faker.image.animals()}/>
            <GalleryHelper fig={faker.image.abstract()}/>
            <GalleryHelper fig={faker.image.transport()}/>
            <GalleryHelper fig={faker.image.city()}/>
            <GalleryHelper fig={faker.image.imageUrl()}/>
          </div>
        </section>
        <CommentSection />
      </article>
    </div>
  );
}
