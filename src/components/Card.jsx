import axios from "axios";
import React from "react";

const Card = (props) => {
  const postDelete = (id) => {
    axios.delete(`https://scizers-backend.vercel.app/api/${id}`).then((res) => {
      window.location.reload();
    });
  };

  const cardEvent = () => {
    const box = window.confirm("Delete the number");
    if (box) {
      postDelete(props.id);
    }
  };

  return (
    <>
      <div className="card-container" onClick={cardEvent}>
        <div className="main-card">
          <h1>{props.name}</h1>
          <h2>{props.phone}</h2>
        </div>
        <h2>{props.email}</h2>
      </div>
    </>
  );
};

export default Card;
