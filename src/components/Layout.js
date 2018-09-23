import React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Header />
    <div className="content">{children}</div>
  </div>
);

export default TemplateWrapper;
