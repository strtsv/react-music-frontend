import React from "react";

class Player extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-secondary-2">
        <div className="container">
          <div className="player">
            <div className="player-title">listen online:</div>
            <div className="jp-player-init">
              <div className="jp-jplayer" />
              <div
                className="jp-audio jp-audio-0"
                role="application"
                aria-label="media player"
              >
                <ul className="jp-player-list">
                  <li
                    className="jp-player-list-item"
                    data-jp-title="\u201CMorning bell\u201D "
                    data-jp-artist="\u201Cmy Soul\u201D"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                  />
                  <li
                    className="jp-player-list-item"
                    data-jp-title="Cyber Sonnet"
                    data-jp-artist="The Stark Palace"
                    data-jp-mp3="https://livedemo00.template-help.com/wt_58907/audio/audio-01.mp3"
                  />
                  <li
                    className="jp-player-list-item"
                    data-jp-title="Your Face"
                    data-jp-artist="Blender Foundation"
                    data-jp-mp3="https://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
                  />
                </ul>
                <div className="jp-interface">
                  <div className="jp-time-rail">
                    <div className="jp-progress">
                      <div className="jp-seek-bar">
                        <div className="jp-play-bar" />
                      </div>
                    </div>
                  </div>
                  <div className="jp-button jp-controls">
                    <button className="jp-btn jp-previous" tabIndex={0} />
                    <button className="jp-btn jp-play" tabIndex={0} />
                    <button className="jp-btn jp-next" tabIndex={0} />
                  </div>
                </div>
                <div className="jp-playlist">
                  <ul>
                    <li />
                  </ul>
                </div>
                <div className="jp-no-solution">
                  <span>Update Required</span> To play the media you will need
                  to either update your browser to a recent version or update
                  your
                  <a href="https://get.adobe.com/flashplayer/" target="_blank">
                    {" "}
                    Flash plugin
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Player;
