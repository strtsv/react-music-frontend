import React from "react";

import i from "../../assets/images/biography-01-370x302.jpg";

class Bio extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="container">
          <div className="row row-40">
            <div className="col-lg-8">
              <h3>My biography</h3>
              <div className="row row-40">
                <div className="col-sm-6">
                  <img src={i} alt width={370} height={302} />
                </div>
                <div className="col-sm-6">
                  <p>
                    Ded do eiusmod Incididunt ut labore et dolore magna ali qua.
                    Ut enim ad minim veniam quis nostrud Ut rutrum lob ortis
                    odio, ut interdum tortor la 1998 et. Donec eget lectus dui.
                    Integer vel faucibus risus. Mauris dolor enim, fringilla sed
                    molestie at, faucibus vel purus
                  </p>
                  <p>
                    Esollicitudin placerat, purus 2001 mattis lorem, ac imper
                    diet arcu ipsum vel arcu. Donec iaculis tortor nec consect
                    etur molestie. Proin ultricies turpis nec nibh bibendum pla
                    cerat. Vivamus elementum non velit sollicitu 2014 us. Etiam
                    quam justo, pharetra eget elit at, gravida
                  </p>
                  <a className="btn btn-primary" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3>Fresh links</h3>
              <ul className="list-marked">
                <li>
                  <a href="#">Pestibulum molestieenean nonummy endreriti</a>
                </li>
                <li>
                  <a href="#">Evamus eget nibh vel metustiam</a>
                </li>
                <li>
                  <a href="#">Buer cursus leo psum</a>
                </li>
                <li>
                  <a href="#">
                    Nulla facilisii primis neclaoreetenean nec eros
                  </a>
                </li>
                <li>
                  <a href="#">Vestibulum ante faucibus orci</a>
                </li>
                <li>
                  <a href="#">Ultrices posuere itudin buspendisse sollic</a>
                </li>
                <li>
                  <a href="#">Ut pharetra augue nec velitaugue</a>
                </li>
                <li>
                  <a href="#">
                    Nam elit agna endrerit sit ametincidunt ac viverra
                  </a>
                </li>
                <li>
                  <a href="#">Donec porta diam eu massa</a>
                </li>
                <li>
                  <a href="#">Quisque diam loremitae dapibus pulvinar</a>
                </li>
                <li>
                  <a href="#">Scelerisque vitae pede</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bio;
