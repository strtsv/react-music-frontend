import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer context-dark text-center">
        <div className="container">
          {}
          <a className="brand" href="index.html">
            <img
              className="brand-logo-dark"
              src="images/logo-default-1486x277.png"
              alt
              width={743}
              height={138}
            />
            <img
              className="brand-logo-light"
              src="images/logo-inverse-892x110.png"
              alt
              width={446}
              height={55}
            />
          </a>
          <p className="rights">
            <span>© </span>
            <span className="copyright-year" />
            <span>. </span>
            <span>All Rights Reserved.</span>
            <span> </span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
