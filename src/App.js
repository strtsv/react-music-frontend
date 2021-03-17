import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import Press from "./pages/Press";
import Biography from "./pages/Biography";
// import News from "./pages/News";
// import Contacts from "./pages/Contacts";
// import Privacy from "./pages/Privacy";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/press.html" component={Press} />
      {/* <Route exact path="/contacts.html" component={Contacts} /> */}
      <Route exact path="/biography.html" component={Biography} />
      {/* <Route exact path="/classic-blog.html" component={Blog} /> */}
      {/* <Route exact path="/index-5.html" component={Privacy} /> */}
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
