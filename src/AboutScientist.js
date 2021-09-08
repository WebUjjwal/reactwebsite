import React from "react";
import ScientistCard from "./ScientistCard";

const AboutScientist = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section_title">
            <p className="section_tag">TEAM MEMBERS</p>
            <h2 className="section_heding">Our Data Scientist</h2>
            <p className="section_descrip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <ScientistCard
            img="./img/scientist1.png"
            name="Merv Adrian"
            worktype="Data Management"
          />

          <ScientistCard
            img="./img/scientist2.png"
            name="Kirk Borne"
            worktype="Data Scientist"
          />

          <ScientistCard
            img="./img/scientist3.png"
            name="Carla Gentry"
            worktype="Analytical Solutions"
          />

          <ScientistCard
            img="./img/scientist4.png"
            name="Marie Curie"
            worktype="Data Scientist"
          />
        </div>
      </div>
    </>
  );
};

export default AboutScientist;
