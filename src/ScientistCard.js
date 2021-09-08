import React from "react";

const ScientistCard = (props) => {
  return (
    <>
      <div className="col-md-3 text-center">
        <div className="scientist_card">
          <img src={props.img} alt="scientist-img" className="img-fluid" />
          <h3> {props.name} </h3>
          <p> {props.worktype} </p>
          <span>
            <i class="bi bi-facebook scientist_icon"></i>
          </span>
          <span>
            <i class="bi bi-twitter scientist_icon"></i>
          </span>
          <span>
            <i class="bi bi-linkedin scientist_icon"></i>
          </span>
          <span>
            <i class="bi bi-instagram scientist_icon"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default ScientistCard;
