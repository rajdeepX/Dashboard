import React from "react";
import "./Contacts.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-container">
        <h2 className="loading-head">Loading...</h2>
        <p className="loading-info">Please wait while your data is retrived</p>
      </div>
    </div>
  );
};

export default Loading;
