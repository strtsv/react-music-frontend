import React from "react";

import i1 from "../../assets/images/post-09-570x370.jpg";
import i2 from "../../assets/images/post-10-270x170.jpg";
import i3 from "../../assets/images/post-11-270x170.jpg";
import i4 from "../../assets/images/post-12-270x170.jpg";
import i5 from "../../assets/images/post-13-270x170.jpg";

class HotVideos extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-secondary-2">
        <div className="container">
          <h3>Hot videos</h3>
          <div className="row row-30">
            <div className="col-md-6">
              <a
                className="thumbnail-gallery"
                href="https://www.youtube.com/embed/d5k9CILJivQ"
                data-lightgallery="item"
              >
                <figure className="thumbnail-gallery-figure">
                  <img src={i1} alt width={570} height={370} />
                </figure>
                <div className="thumbnail-gallery-content">
                  <div className="thumbnail-video-post-button" />
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <div className="row row-30">
                <div className="col-sm-6">
                  <a
                    className="thumbnail-gallery"
                    href="https://www.youtube.com/embed/d5k9CILJivQ"
                    data-lightgallery="item"
                  >
                    <figure className="thumbnail-gallery-figure">
                      <img src={i2} alt width={270} height={170} />
                    </figure>
                    <div className="thumbnail-gallery-content">
                      <div className="thumbnail-video-post-button" />
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    className="thumbnail-gallery"
                    href="https://www.youtube.com/embed/d5k9CILJivQ"
                    data-lightgallery="item"
                  >
                    <figure className="thumbnail-gallery-figure">
                      <img src={i3} alt width={270} height={170} />
                    </figure>
                    <div className="thumbnail-gallery-content">
                      <div className="thumbnail-video-post-button" />
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    className="thumbnail-gallery"
                    href="https://www.youtube.com/embed/d5k9CILJivQ"
                    data-lightgallery="item"
                  >
                    <figure className="thumbnail-gallery-figure">
                      <img src={i4} alt width={270} height={170} />
                    </figure>
                    <div className="thumbnail-gallery-content">
                      <div className="thumbnail-video-post-button" />
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    className="thumbnail-gallery"
                    href="https://www.youtube.com/embed/d5k9CILJivQ"
                    data-lightgallery="item"
                  >
                    <figure className="thumbnail-gallery-figure">
                      <img src={i5} alt width={270} height={170} />
                    </figure>
                    <div className="thumbnail-gallery-content">
                      <div className="thumbnail-video-post-button" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HotVideos;
