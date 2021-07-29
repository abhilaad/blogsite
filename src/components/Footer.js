import React from "react";

export default function Footer() {
  const qlinks = ["Home", "Archive", "Categories", "Tag cloud", "Search"];
  const info = ["About Us", "Authors", "Newsletter", "Advertising", "Sitemap"];
  const follow = [
    ["https://www.facebook.com/", "Facebook"],
    ["https://www.instagram.com/", "Instagram"],
    ["https://twitter.com/", "Twitter"],
    ["https://www.youtube.com/", "Youtube"],
    ["https://www.linkedin.com/", "Linkedin"],
  ];

  return (
    <div>
      <footer className="small bgfooter">
        <div className="container py-3 py-sm-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <h6>Quick links</h6>
              <ul className="list-unstyled">
                {qlinks.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h6>Information</h6>
              <ul className="list-unstyled">
                {info.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h6>Follow us</h6>
              <ul className="list-unstyled">
                {follow.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item[0]} target="_blank" rel="noreferrer">{item[1]}</a>
                    </li>
                  );
                })}
                
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h6>Contact us</h6>
              <address>
                <strong>Blog Name</strong>
                <br />
                Street name
                <br />
                ZIP code and city
                <br />
                <abbr title="Telephone">T:</abbr>{" "}
                <a href="tel:+1234567890">(123) 456-7890</a>
                <br />
                <abbr title="Mail">M:</abbr>{" "}
                <a href="mailto:info@domain.com">info@domain.com</a>
              </address>
            </div>
          </div>
          <ul className="list-inline text-center">
            <li className="list-inline-item">© 2017 Blog Name</li>
            <li className="list-inline-item">All rights reserved.</li>
            <li className="list-inline-item">
              Terms of use and privacy policy.
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
