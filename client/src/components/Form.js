import React from "react";
import { useParams } from "react-router-dom";

function Form() {
  const { endpoint } = useParams();
  var title = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);
  return (
    <div className="formBody">
      <h1>{title}: Case Information</h1>
      <h2>Add Plaintiff Information</h2>
      <div className="caseForm">
        <input name="Plaintiff Name" />
      </div>
    </div>
  );
}

export default Form;
