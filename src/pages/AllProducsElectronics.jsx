import React from "react";
import Card from "../components/Card";
import sofa2 from "../assets/sofa_single.png";
import sofa3 from "../assets/single_sofa.png";
import sofa4 from "../assets/sofa_blue.png";
import bed from "../assets/bed.png";

const AllProducsElectronics = () => {
  return (
    <div className="container">
      <h1>Electronics</h1>
      <div className="row row-cols-4">
        <Card pic={bed}></Card>
        <Card pic={bed}></Card>
        <Card pic={bed}></Card>
        <Card pic={bed}></Card>
        <Card pic={bed}></Card>
        <Card pic={bed}></Card>
        <Card pic={bed}></Card>
      </div>
    </div>
  );
};

export default AllProducsElectronics;
