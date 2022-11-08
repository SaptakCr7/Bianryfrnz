import React from "react";

const card = ({ name, id, email, username }) => {
  return (
    <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Hane doe" src={`https://robohash.org/ ${id}?set=set5`} />
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{email}</p>
    </div>
  );
};

export default card;
