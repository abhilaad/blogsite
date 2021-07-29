import React from "react";
import BodyLeftHelper from "../BodyLeftHelper";

import CommentSection from "../CommentSection";

export default function TextPageLeft() {
  return (
    <div>
      
        <article className="mb-3">
          <header className="mb-2">
            <button className="badge badge-primary">
              Category
            </button>
            <h1>Text blog post title</h1>
            <BodyLeftHelper />
          </header>
          <section id="main" className="mb-3">
            <figure className="figure">
              <img
                src="http://placehold.it/800x600"
                className="figure-img img-fluid"
                alt="Figured"
              />
              <figcaption className="figure-caption small">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  laoreet pellentesque lorem sed elementum.
                </p>
                <p className="mb-0">
                  <i className="fa fa-camera" aria-hidden="true" />
                  <span className="sr-only">Photo by:</span> Artist Name
                </p>
              </figcaption>
            </figure>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              arcu bibendum massa euismod scelerisque. Morbi porttitor tellus
              tempor metus posuere dictum. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fermentum ullamcorper sem, vel ultrices elit ultrices
              consectetur. Proin interdum congue velit nec mollis. Curabitur non
              tellus sit amet diam suscipit vehicula a eget tellus. Sed neque
              mauris, consectetur eget ipsum elementum, vulputate condimentum
              nisl. Mauris lobortis eros at vulputate blandit. Aenean varius
              porttitor tellus. Suspendisse pretium feugiat dolor, a vulputate
              turpis. Mauris in consectetur libero. In eget commodo eros.
              Pellentesque vel risus odio.
            </p>
            <p>
              Aliquam imperdiet molestie odio at aliquet. Cras convallis
              tristique tellus eget ultricies. Donec accumsan magna et dapibus
              condimentum. Nunc et velit convallis, aliquam sapien non,
              pellentesque nisl. Donec nunc velit, congue faucibus laoreet sit
              amet, hendrerit sit amet dolor. Aenean euismod lorem vitae ligula
              convallis commodo id ultricies tortor. Mauris scelerisque in ex ac
              vulputate. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                laoreet pellentesque lorem sed elementum.
              </p>
              <footer className="blockquote-footer">Firstname Lastname</footer>
            </blockquote>
            <p>
              Donec a nibh id elit hendrerit efficitur vitae nec nisi. Nulla
              facilisi. Nullam venenatis gravida mattis. Pellentesque viverra
              massa non rutrum rutrum. Mauris vulputate dapibus condimentum. Sed
              faucibus sapien nec lectus aliquet, at efficitur nisi egestas.
              Curabitur consectetur lectus ut tellus sagittis bibendum. Nulla
              pulvinar dapibus elit, et rhoncus orci dignissim at. Morbi rhoncus
              sit amet magna vel molestie. Aliquam ex elit, mattis vitae
              efficitur non, dapibus vel orci. Sed hendrerit magna non pulvinar
              ultrices. Nunc ac nunc sit amet sem mollis porta. Maecenas
              vulputate aliquet tortor, rutrum pulvinar nisl vehicula non.
            </p>
            <h2>Subheading</h2>
            <p>
              Nam purus eros, dignissim quis pretium vitae, tempus convallis
              ligula. Fusce et lectus fringilla, tempor metus egestas, fringilla
              sapien. Nulla non laoreet purus, id ullamcorper diam. Praesent
              faucibus et mi eget cursus. Cras lectus tortor, gravida vel
              facilisis vel, volutpat a lorem. Proin tincidunt, libero eget
              feugiat sagittis, felis turpis aliquam tortor, non vestibulum quam
              libero non sem. Mauris eget ex lacus. Aliquam pretium congue diam
              non sodales.
            </p>
            <p>
              Aliquam eleifend libero quis dignissim tristique. Sed semper magna
              odio, vitae porttitor odio congue mollis. Vivamus ultricies tellus
              at diam vestibulum tempor. Aenean arcu dui, eleifend ac felis non,
              suscipit mollis tellus. Integer a vestibulum ex. Sed eu viverra
              purus. Morbi eu felis a erat suscipit hendrerit a a massa. Integer
              accumsan justo ante, nec placerat sem viverra et. Vestibulum
              congue vehicula ligula, nec condimentum ex elementum a. Nulla eu
              imperdiet sem, quis dictum ante. Sed efficitur vitae leo egestas
              faucibus. Etiam pharetra in urna vel tincidunt. Morbi rutrum nunc
              bibendum sapien dapibus elementum. Etiam sed ipsum dapibus, semper
              elit eu, ullamcorper urna. Vivamus scelerisque, nisi nec lobortis
              eleifend, urna ipsum lacinia nibh, vitae ornare ante purus sed
              mauris.
            </p>
          </section>
          <CommentSection />
        </article>
      
    </div>
  );
}
