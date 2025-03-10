import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Container, Button, Row, Col, Spinner } from 'react-bootstrap';
// import { useState } from 'react';
// import axios from "axios";
import { Editor } from './Editor';
import "./App.css";


function App() {

  // const [fileType, setFileType] = useState("py");
  // const [codeText, setCodeText] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log(fileType, codeText);
  //   formatCode();
  // }

  // function formatCode() {
  //   const apiUrl = "http://localhost:8080/fileContent";
  //   setIsLoading(true);
  //   axios.post(
  //     apiUrl, codeText,
  //     {
  //       headers: { 'Content-Type': 'text/plain', 'filetype': fileType }
  //     }
  //   ).then(
  //     response => {
  //       console.log(response);
  //       setCodeText(response.data);
  //       setIsLoading(false);
  //     }
  //   ).catch(
  //     error => {
  //       console.error(error);
  //       setIsLoading(false);
  //     }
  //   )
  // }

  return (
    <>
      {/* <Container className="py-4">

        <Container className="py-4 text-center">
          <h2>Code Formatter</h2>
        </Container>

        <Container className="py-2" >
          <Row >
            <Col xs={10} md={8} className='mx-auto'>
              <Form className="p-2" onSubmit={handleSubmit}>
                <Form.Group className="py-2">
                  <Form.Select
                    aria-label="File Type"
                    className="border border-primary"
                    value={fileType}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setFileType(event.target.value); }}
                  >
                    <option value="py">Python</option>
                    <option value="js">Javascript</option>
                    <option value="ts">Typescript</option>
                    <option value="jsx">JSX (React) </option>
                    <option value="tsx">TSX (React)</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Paste your code here</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={15}
                    className="border border-primary"
                    value={codeText}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { setCodeText(event.target.value); }}
                  />
                </Form.Group>

                <Button type="submit">
                  Format Code
                  {
                    isLoading &&
                    <Spinner animation="border" role="status" size='sm' className='mx-2'>
                    </Spinner>
                  }
                </Button>


              </Form>
            </Col>
          </Row>

        </Container>
      </Container> */}
      <Editor/>
    </>
  );
}

export default App;
