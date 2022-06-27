import React from "react";
const card = (props) => {
  const { id,  link } = props.info;
  return (
    <>
        <div className="card-container1" key={id}>
          <div className="card1">
            <img src={link} alt="images" className="card-media1" />
          </div>
        </div>
    </>
  );
};

export default card;
