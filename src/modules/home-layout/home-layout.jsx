import React, { Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import Pagecontent from "./page-content";
import Footer from "./footer";

export default class Homelayout extends Component {
  render() {
    return (
      <div  >
        <Header></Header>
        <Carousel></Carousel>
        <Pagecontent></Pagecontent>
        <Footer></Footer>
      </div>
    );
  }
}
