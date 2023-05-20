import React from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

function Form() {
  const { endpoint } = useParams();
  var title = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);

  return (
    <div className="formBody">
      <h1>{title}: Case Information</h1>
      <h2>Add Plaintiff Information</h2>
      <div className="caseForm">
        <label>Plaintiff Name</label>
        <input name="Plaintiff Name" />
        <FileUpload />
      </div>
    </div>
  );
}

function FileUpload() {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      files[file.name] = file;
    }
    return { ...files };
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
    }
  };

  const onClickUpload = () => {
    fileInputField.current.click();
  };

  return (
    <div className="fileUploadSection">
      <label>Filing Upload</label>
      <button className="uploadButton" type="button" onClick={onClickUpload}>
        <span> Upload PDF files</span>
      </button>
      <input
        ref={fileInputField}
        onChange={handleNewFileUpload}
        title=""
        accept="pdf"
        value=""
        type="file"
        hidden
        multiple
      />
      <UploadedFilePreviews files={files}/>
    </div>
  );
}

function UploadedFilePreviews({ files }) {
  return (
    <div className="filenames">
      <h3>Uploaded Files</h3>
      {Object.keys(files).map((fileName, index) => {
        let file = files[fileName];
        return <span key={index}>{file.name}</span>;
      })}
    </div>
  );
}

export default Form;
