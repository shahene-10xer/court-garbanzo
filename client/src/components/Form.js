import React from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import sendPdfData from "../Extract";

function Form() {
  const { endpoint } = useParams();
  var title = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);

  return (
    <div className="formBody">
      <h1>{title}: Case Information</h1>
      <PartyForm partyName={"Plaintiff"} />
      <PartyForm partyName={"Defendant"} />
      {/* TODO: Add API call */}
      <button className="uploadButton" type="button">
        <span>Summarise</span>
      </button>
    </div>
  );
}

function PartyForm({ partyName }) {
  return (
    <div>
      <h2>Add {partyName} Information</h2>
      <div className="caseForm">
        <label>{partyName} Name</label>
        <input name={partyName + " Name"} />
        <FileUpload />
      </div>
    </div>
  );
}

function readFile(file_event) {
  if (window.FileReader) {
    var file = file_event.target.files[0];
    var reader = new FileReader();
    if (file && file.type.match("pdf.*")) {
      reader.readAsBinaryString(file);
    }
    reader.onloadend = async function (_) {
      await sendPdfData(reader.result);
    };
  }
}

function FileUpload() {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleNewFileUpload = (event) => {
    const newFiles = event.target?.files;
    if (newFiles.length) {
      let updatedFiles = { ...newFiles, ...files };
      setFiles(updatedFiles);
    }
    readFile(event);
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
        id="pdfUpload"
        hidden
        multiple
      />
      <UploadedFilePreviews files={files} />
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
