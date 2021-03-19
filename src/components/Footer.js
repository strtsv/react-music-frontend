import React from "react";
import $ from "jquery";

import i1 from "../assets/images/logo-default-1486x277.png";
import i2 from "../assets/images/logo-inverse-892x110.png";

class Footer extends React.Component {
  componentDidMount() {
    const copyrightYear = $(".copyright-year");
    const initialDate = new Date();
    copyrightYear.text(initialDate.getFullYear());
  }
  render() {
    return (
      <footer className="section footer context-dark text-center">
        <div className="container">
          {}
          <a className="brand" href="index.html">
            <img
              className="brand-logo-dark"
              src={i1}
              alt
              width={743}
              height={138}
            />
            <img
              className="brand-logo-light"
              src={i2}
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
