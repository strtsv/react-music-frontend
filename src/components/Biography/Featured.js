import React from "react";

import i1 from "../../assets/images/biography-02-170x199.jpg";
import i2 from "../../assets/images/biography-03-170x199.jpg";
import i3 from "../../assets/images/biography-04-170x199.jpg";
import i4 from "../../assets/images/biography-05-170x199.jpg";

class Featured extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="container">
          <div className="row row-40">
            <div className="col-lg-8">
              <h3>Featured albums</h3>
              <p>
                Mauris urna metus, dapibus a dolor sed, consequat dignissim
                nulla. Vivamus tristique porta nulla, ac egestas elit. Duis et
                facilisis felis. Proin elit nibh, tincidunt nec consequat ut,
                aliquam eget eros.Nam in erat sed quam mattis bibendum. Nulla
                laoreet egestas eros, a lacinia metus lacinia eu. Maecenas diam
                lectus, aliquam et massa sed, bibendum vulputate justo.
                Vestibulum egestas justo pellentesque nisl consectetur, vel
                egestas magna molestie
              </p>
              <div className="row row-30">
                <div className="col-md-3 col-6">
                  <a className="thumbnail-classic" href="#">
                    <figure className="thumbnail-classic-figure">
                      <img src={i1} alt width={170} height={199} />
                    </figure>
                    <div className="thumbnail-classic-content">
                      <p>“TICKETS STILL AVAILABLE”</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 col-6">
                  <a className="thumbnail-classic" href="#">
                    <figure className="thumbnail-classic-figure">
                      <img src={i2} alt width={170} height={199} />
                    </figure>
                    <div className="thumbnail-classic-content">
                      <p>“SONGS IN THE KEY OF LIFE”</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 col-6">
                  <a className="thumbnail-classic" href="#">
                    <figure className="thumbnail-classic-figure">
                      <img src={i3} alt width={170} height={199} />
                    </figure>
                    <div className="thumbnail-classic-content">
                      <p>“SOUNDTRACKS FOR THE BLIND”</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 col-6">
                  <a className="thumbnail-classic" href="#">
                    <figure className="thumbnail-classic-figure">
                      <img src={i4} alt width={170} height={199} />
                    </figure>
                    <div className="thumbnail-classic-content">
                      <p>“ONE DAY IT'LL ALL MAKE SENSE”</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <fieldset className="track-box">
                <legend className="h3">Tracklists</legend>
                <ul
                  className="list-marked"
                  data-jp-playlist-play-on=".play-link"
                  data-jp-playlist-relative-to=".jp-player-fixed"
                >
                  <li
                    data-jp-title="Cyber Sonnet"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://livedemo00.template-help.com/wt_58907/audio/audio-01.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Pestibulum endrerit nonummy
                    </a>
                  </li>
                  <li
                    data-jp-title="Your Face"
                    data-jp-artist="Blender Foundation"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Evamus eget nibh metustiam
                    </a>
                  </li>
                  <li
                    data-jp-title="Cro Magnon Man"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Buer cursus leo psum
                    </a>
                  </li>
                  <li
                    data-jp-title="Cro Magnon Man"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Nulla facilisii primis neclaoreetenean
                    </a>
                  </li>
                  <li
                    data-jp-title="Cyber Sonnet"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://livedemo00.template-help.com/wt_58907/audio/audio-01.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Vestibulum ante faucibus orci
                    </a>
                  </li>
                  <li
                    data-jp-title="Your Face"
                    data-jp-artist="Blender Foundation"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Ultrices posuere itudin buspendisse
                    </a>
                  </li>
                  <li
                    data-jp-title="Cro Magnon Man"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Ut pharetra augue nec velitaugue
                    </a>
                  </li>
                  <li
                    data-jp-title="Cro Magnon Man"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Nam endrerit sit ametincidunt
                    </a>
                  </li>
                  <li
                    data-jp-title="Cyber Sonnet"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://livedemo00.template-help.com/wt_58907/audio/audio-01.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Donec porta diam eu massa
                    </a>
                  </li>
                  <li
                    data-jp-title="Your Face"
                    data-jp-artist="Blender Foundation"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Quisque diam loremitae dapibus
                    </a>
                  </li>
                  <li
                    data-jp-title="Cro Magnon Man"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                    data-jp-playlist-item
                  >
                    <a className="play-link" href="javascript:;">
                      Scelerisque vitae pede
                    </a>
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;
