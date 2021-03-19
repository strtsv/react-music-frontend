import React from "react";

import i from "../../assets/images/home-02-270x244.jpg";

import i1 from "../../assets/images/home-03-270x210.jpg";
import i2 from "../../assets/images/home-04-32x21.png";
import i3 from "../../assets/images/home-05-170x199.jpg";
import i4 from "../../assets/images/home-06-170x199.jpg";
import i5 from "../../assets/images/home-07-170x199.jpg";

class Hero extends React.Component {
  render() {
    return (
      <section className="section section-hero">
        <div className="section-sm">
          <div className="container">
            <div className="row row-40">
              <div className="col-sm-6 col-xl-3">
                <div className="post-hero">
                  <h2 className="h3 post-hero-address">Lincoln Park</h2>
                  <div className="post-hero-time">
                    <time dateTime={2020}>
                      <span className="h1 post-hero-date">Jul.11</span>
                      <br />
                      <span className="h2 post-hero-time">7-9pm</span>
                    </time>
                  </div>
                  <h3 className="h2 post-hero-title">
                    Jessica Smith Live Concert
                  </h3>
                  <p className="post-hero-text">
                    This Saturday Jessica Smith will be performing her
                    acknowledged hits and new songs from her latest album at
                    Lincoln Park. Book your tickets now!
                  </p>
                  <a className="btn btn-secondary btn-arrow" href="#">
                    get the tickets
                  </a>
                </div>
                <div className="post-hero">
                  <div className="post-hero-time">
                    <time dateTime={2020}>
                      <span className="h1 post-hero-date">Jul.15</span>
                      <br />
                      <span className="h2 post-hero-time">5-6pm</span>
                    </time>
                  </div>
                  <h2 className="h3 post-hero-address text-heading pr-xl-5">
                    Easter Brunch at CHANT
                  </h2>
                  <h2 className="h3 post-hero-address">
                    298 Wilson St Chicago, Illinois
                  </h2>
                  <a className="btn btn-secondary btn-arrow" href="#">
                    get the tickets
                  </a>
                </div>
              </div>
              <div className="col-6 d-none d-xl-block">
                <div className="box-border" />
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="post-hero">
                  <h3 className="text-primary">New album available now!</h3>
                  <div className="post-banner">
                    <div
                      className="post-banner-head context-dark"
                      style={{
                        backgroundImage: "url(" + i + ")",
                      }}
                    >
                      <div className="post-banner-name h4">
                        Jessica <br /> Smith
                      </div>
                      <div className="post-banner-title">“My Soul”</div>
                    </div>
                    <a className="post-banner-footer" href="#">
                      <div className="post-banner-price h3">$15.00</div>
                      <div className="post-banner-link">Buy CD</div>
                    </a>
                  </div>
                </div>
                <div className="post-hero">
                  <h3 className="text-primary">Latest concert video</h3>
                  <a
                    className="thumbnail-video-post"
                    href="https://www.youtube.com/embed/d5k9CILJivQ"
                    data-lightgallery="item"
                  >
                    <figure className="thumbnail-video-post-figure">
                      <img src={i1} alt width={270} height={210} />
                    </figure>
                    <div className="thumbnail-video-post-content">
                      <div className="thumbnail-video-post-button" />
                      <h5 className="thumbnail-video-post-time">
                        <time dateTime={2020}>June 25</time>
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-md">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="text-primary heading-bg-gradient">
                  <span>“SINGING THAT COMES FROM THE SOUL”</span>
                </h1>
              </div>
            </div>
            <div className="row row-30">
              <div className="col-lg-6">
                <div className="text-column">
                  <p>
                    Original jazz in a traditional style is what defines jazz
                    singer/songwriter Jessica Smith. Born in Los Angeles, CA,
                    USA, the American singer began her musical adventure as a
                    teenager. In 2008, she set out for a search of musicians who
                    would complement her vocals on a classic yet
                    contemporary-sounding album featuring a mix of jazz
                    standards and her own jazz originals. This is how her first
                    album “Golden” appeared. Shortly after release, it went
                    platinum and attracted thousands of fans all over the world.
                    Today, Jessica is one of the most recognizable jazz
                    vocalists whose voice is unforgettable.
                  </p>
                  <a
                    className="btn btn-icon btn-icon-left btn-secondary"
                    href="#"
                  >
                    <span className="icon">
                      <img src={i2} alt width={32} height={21} />
                    </span>
                    <span>Become a Fan</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row row-30">
                  <div className="col-md-4 col-sm-6">
                    <a className="thumbnail-classic" href="#">
                      <figure className="thumbnail-classic-figure">
                        <img src={i3} alt width={170} height={199} />
                      </figure>
                      <div className="thumbnail-classic-content">
                        <p>“rolling stones”</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a className="thumbnail-classic" href="#">
                      <figure className="thumbnail-classic-figure">
                        <img src={i4} alt width={170} height={199} />
                      </figure>
                      <div className="thumbnail-classic-content">
                        <p>“clash”</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a className="thumbnail-classic" href="#">
                      <figure className="thumbnail-classic-figure">
                        <img src={i5} alt width={170} height={199} />
                      </figure>
                      <div className="thumbnail-classic-content">
                        <p>“blender”</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
