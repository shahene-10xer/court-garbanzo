from fastapi import FastAPI
from pydantic import BaseModel
import boto3
import base64
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",  # Update with the URL of your React application
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Configure AWS credentials
session = boto3.Session(
    aws_access_key_id='AKIA4FWPK6GVZYU5OUZI',
    aws_secret_access_key='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',
    region_name='us-west-1'
)

# Create a Textract client
textract_client = session.client('textract')

class File(BaseModel):
    file_data: str  # Change the type to string

@app.post('/extract-text')
def extract_text(file: File):
    try:
        # Decode the base64-encoded file data
        file_bytes = base64.b64decode(file.file_data)

        # Prepare the Textract request
        response = textract_client.detect_document_text(
            Document={'Bytes': file_bytes}
        )

        # Retrieve the extracted text
        extracted_text = ''
        for block in response['Blocks']:
            if block['BlockType'] == 'LINE':
                extracted_text += block['Text'] + '\n'
        print({'extracted_text': extracted_text})
        return {'extracted_text': extracted_text}

    except Exception as e:
        print('Text extraction failed:', e)
        return {'error': 'Text extraction failed'}



@app.get("/comparison")
def get_comparison():
    pass


@app.get("/summary")
def get_summary():
    pass


@app.get("/response")
def get_response():
    pass

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
