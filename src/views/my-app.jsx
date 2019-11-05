
import React from "react";

import { Container, Row } from "reactstrap";

import CardsFooter from "components/Footers/CardsFooter.jsx";

import Hero from "./IndexSections/Hero.jsx";

import FormHealth  from "./my-views/form-health.jsx"
// import Lifestyle from "./my-views/lifestyle.jsx"

class MyApp extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <Hero />
          <FormHealth/>
          <hr/>
        </main>
      </>
    );
  }
}

export default MyApp;
