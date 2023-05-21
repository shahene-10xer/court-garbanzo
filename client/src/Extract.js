const sendPdfData = async (fileData) => {
    // Prepare the request body with base64-encoded file data
    const requestBody = {
      file_data: btoa(fileData),
    };

    try {
       await fetch("http://localhost:8000/extract-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
   } catch (error) {
      console.error("Text extraction failed:", error);
    }
};

export default sendPdfData;
