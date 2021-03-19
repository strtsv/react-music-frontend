import React from "react";

import i1 from "../../assets/images/post-01-270x200.jpg";
import i2 from "../../assets/images/post-02-270x200.jpg";
import i3 from "../../assets/images/post-03-270x200.jpg";
import i4 from "../../assets/images/post-04-270x200.jpg";

class LatestNews extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="container">
          <h3 className="text-center text-sm-left">Latest news</h3>
          <div className="row row-40">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i1} alt width={270} height={200} />
                  </a>
                </figure>
                <h6 className="post-classic-title">
                  <a href="#">SED QUIA CONSEQUUNT UR MAGN</a>
                </h6>
                <div className="post-classic-meta">
                  <div>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <div className="icon fa-calendar" />
                      </div>
                      <div className="unit-body">
                        <time dateTime={2020}>Oct 02, 2020</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a className="unit unit-spacing-xs" href="#">
                      <div className="unit-left">
                        <div className="icon fa-comments" />
                      </div>
                      <div className="unit-body">
                        <p>12 comments</p>
                      </div>
                    </a>
                  </div>
                </div>
                <hr />
                <p className="post-classic-text">
                  Proin ultricies turpis nec nibh bibendum pla cerat. Vivamus
                  elementum non velit sollicitu us. Etiam quam justo, pharetra
                  eget elit at, gravida convallis
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i2} alt width={270} height={200} />
                  </a>
                </figure>
                <h6 className="post-classic-title">
                  <a href="#">DOLORES EOS QUI RATIONE</a>
                </h6>
                <div className="post-classic-meta">
                  <div>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <div className="icon fa-calendar" />
                      </div>
                      <div className="unit-body">
                        <time dateTime={2020}>Oct 02, 2020</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a className="unit unit-spacing-xs" href="#">
                      <div className="unit-left">
                        <div className="icon fa-comments" />
                      </div>
                      <div className="unit-body">
                        <p>12 comments</p>
                      </div>
                    </a>
                  </div>
                </div>
                <hr />
                <p className="post-classic-text">
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Consequat
                  id porta nibh venenatis cras sed.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i3} alt width={270} height={200} />
                  </a>
                </figure>
                <h6 className="post-classic-title">
                  <a href="#">RATIONE VOLUPTATEM</a>
                </h6>
                <div className="post-classic-meta">
                  <div>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <div className="icon fa-calendar" />
                      </div>
                      <div className="unit-body">
                        <time dateTime={2020}>Oct 02, 2020</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a className="unit unit-spacing-xs" href="#">
                      <div className="unit-left">
                        <div className="icon fa-comments" />
                      </div>
                      <div className="unit-body">
                        <p>12 comments</p>
                      </div>
                    </a>
                  </div>
                </div>
                <hr />
                <p className="post-classic-text">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Pellentesque pulvinar
                  pellentesque habitant morbi.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="post-classic">
                <figure className="post-classic-figure">
                  <a href="#">
                    <img src={i4} alt width={270} height={200} />
                  </a>
                </figure>
                <h6 className="post-classic-title">
                  <a href="#">DOLOR SIT AMET</a>
                </h6>
                <div className="post-classic-meta">
                  <div>
                    <div className="unit unit-spacing-xs">
                      <div className="unit-left">
                        <div className="icon fa-calendar" />
                      </div>
                      <div className="unit-body">
                        <time dateTime={2020}>Oct 02, 2020</time>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a className="unit unit-spacing-xs" href="#">
                      <div className="unit-left">
                        <div className="icon fa-comments" />
                      </div>
                      <div className="unit-body">
                        <p>12 comments</p>
                      </div>
                    </a>
                  </div>
                </div>
                <hr />
                <p className="post-classic-text">
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Pretium viverra
                  suspendisse potenti nullam ac tortor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNews;
