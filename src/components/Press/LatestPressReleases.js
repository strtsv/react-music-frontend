import React from "react";

import i1 from "../../assets/images/post-05-170x170.jpg";
import i2 from "../../assets/images/post-06-170x170.jpg";
import i3 from "../../assets/images/post-07-170x170.jpg";
import i4 from "../../assets/images/post-08-170x170.jpg";

class LatestPressReleases extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-4">
              <h3>Latest press releases</h3>
              <p>
                CONSEQUUNTUR MAGNI DO LORES EOS QUI RATIONE VOLUPTAT EM SEQUI.
                LOREM IPSUM DOLOR SIT AMET
              </p>
              <p>
                Lor em ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mi mi, suscipit in fermentum ac, porttitor vel elit. Mauris
                vitae diam eget dui condiment um varius sed ac nunc. Int eger
                facilisis in neque a rutrum. Proin non condimentum est. Nunc
                convallis interdum posuere. Fusce hendrerit pharetra vehicula.
              </p>
              <p>
                Donec porttitor arcu sit amet dui scelerisque accumsan. Praesent
                mollis et augue ut pulv inar. Quisque a est dolor. Praesent
                fringilla enim et est tincidunt vulputate non eibero. Prae sent
                sed posuere quam. Etiam at ligula a est gravida pulvinar. Sed ut
                imperdiet ante
              </p>
            </div>
            <div className="col-lg-8">
              <h3>News archive</h3>
              <div className="row row-40">
                <div className="col-sm-3 col-6">
                  <div className="post-classic post-classic-mod-1">
                    <figure className="post-classic-figure">
                      <a href="#">
                        <img src={i1} alt width={170} height={170} />
                      </a>
                    </figure>
                    <h6 className="post-classic-title">
                      <a href="#">MAURIS ACCUMSAN</a>
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
                    </div>
                    <p className="post-classic-text">
                      Ancididunt ut lab ore et do lore mag na aliqua.
                    </p>
                    <a className="post-classic-link" href="#">
                      More
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="post-classic post-classic-mod-1">
                    <figure className="post-classic-figure">
                      <a href="#">
                        <img src={i2} alt width={170} height={170} />
                      </a>
                    </figure>
                    <h6 className="post-classic-title">
                      <a href="#">NULLA VEL DIAM</a>
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
                    </div>
                    <p className="post-classic-text">
                      Dore mag na aliqua. Maecenas rutrum, enim sit
                    </p>
                    <a className="post-classic-link" href="#">
                      More
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="post-classic post-classic-mod-1">
                    <figure className="post-classic-figure">
                      <a href="#">
                        <img src={i3} alt width={170} height={170} />
                      </a>
                    </figure>
                    <h6 className="post-classic-title">
                      <a href="#">EDIN LACUS UT</a>
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
                    </div>
                    <p className="post-classic-text">
                      Maecenas rutrum, enim sit am et cons ectetur semper
                    </p>
                    <a className="post-classic-link" href="#">
                      More
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="post-classic post-classic-mod-1">
                    <figure className="post-classic-figure">
                      <a href="#">
                        <img src={i4} alt width={170} height={170} />
                      </a>
                    </figure>
                    <h6 className="post-classic-title">
                      <a href="#">ENIM ADIPISCING</a>
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
                    </div>
                    <p className="post-classic-text">
                      Hendrerit metus, eu aliquam dui nunc semper
                    </p>
                    <a className="post-classic-link" href="#">
                      More
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

export default LatestPressReleases;
