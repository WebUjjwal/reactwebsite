import React from "react";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="col-md-5 text-center">
        <div className="testimonial_card">
          <p> {props.para} </p>
          <img src={props.img} alt="img" className="img-fluid" />
          <h5> {props.name} </h5>
          <span> {props.worktype} </span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
