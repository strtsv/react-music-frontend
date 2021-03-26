import React from "react";

class Post extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-secondary-2">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-3 col-sm-6">
              <div className="post">
                <div className="post-time">
                  <time dateTime={2020}>
                    <span className="h2">July</span>
                    <span className="h1">25</span>
                  </time>
                </div>
                <p className="post-text">
                  New video of Jessica’s upcoming single “In Your Arms” directed
                  by Adam Peters is already available! Feel free to watch and
                  comment it online. You can also pre-order the song in all
                  music stores today.
                </p>
                <a className="btn post-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="post">
                <div className="post-time">
                  <time dateTime={2020}>
                    <span className="h2">July</span>
                    <span className="h1">20</span>
                  </time>
                </div>
                <p className="post-text">
                  Jessica Smith has recently taken part in Jazz Music Awards
                  2019 where she received an award as the Best Female Vocalist.
                  Watch the full ceremony and Jessica’s performance on our
                  website.
                </p>
                <a className="btn post-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="post">
                <div className="post-time">
                  <time dateTime={2020}>
                    <span className="h2">July</span>
                    <span className="h1">15</span>
                  </time>
                </div>
                <p className="post-text">
                  English jazz band “Peter Johnson’s Quartet” invited Jessica
                  Smith to work on their next song “A Tale of Winds”. It will
                  appear on the band’s forthcoming album “Coming Home” next
                  year.
                </p>
                <a className="btn post-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="post">
                <div className="post-time">
                  <time dateTime={2020}>
                    <span className="h2">July</span>
                    <span className="h1">10</span>
                  </time>
                </div>
                <p className="post-text">
                  European Summer Jazz Festival invited Jessica Smith to take
                  part as one of the headliners. She is going to perform her
                  most popular songs while also taking part in live
                  collaborations with other artists.
                </p>
                <a className="btn post-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Post;
