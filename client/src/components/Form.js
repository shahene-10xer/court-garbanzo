import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Form() {
  const [files, setFiles] = useState({});
  const [name, setName] = useState();

  const { endpoint } = useParams();
  var title = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);
  return (
    <div className="formBody">
      <h1>{title}: Case Information</h1>
      <h2>Add Plaintiff Information</h2>
      <div className="caseForm">
        <label>Plaintiff Name</label>
        <input name="Plaintiff Name" />
        <div className="fileUploadSection">
          <label>Filing Upload</label>
          <button className="uploadButton" type="button">
            <span> Upload {"files"}</span>
          </button>
          <input type="file" title="" value="" hidden />
        </div>
      </div>
    </div>
  );
}

export default Form;
