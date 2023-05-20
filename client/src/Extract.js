const handlePdfUpload = async (event) => {
  const file = event.target.files[0];

  // Read the PDF file as bytes
  const reader = new FileReader();
  reader.onloadend = async () => {
    const fileData = reader.result;

    // Prepare the request body with base64-encoded file data
    const requestBody = {
      file_data: btoa(fileData),
    };

    try {
      const response = await fetch("http://localhost:8000/extract-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data.extracted_text);
    } catch (error) {
      console.error("Text extraction failed:", error);
    }
  };
  reader.readAsBinaryString(file);
};

export default handlePdfUpload;
