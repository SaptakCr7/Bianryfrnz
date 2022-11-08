import React from "react";

const Searchbox = ({ searchfield, searchchange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bw2 b--blue bg-light-yellow "
        type="search"
        placeholder="Search For Freinds"
        onChange={searchchange}
      ></input>
    </div>
  );
};
export default Searchbox;
