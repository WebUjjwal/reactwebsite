import React from "react";

const ProcessCard = (props) => {
  return (
    <>
      <div className="col-md-4 gy-4">
        <div className="process_box">
          <img src={props.img} className="img-fluid" alt="process_img" />
          <h2>{props.heading}</h2>
          <p>{props.para}</p>
        </div>
      </div>
    </>
  );
};

export default ProcessCard;
