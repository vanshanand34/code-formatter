import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';



export function Editor() {

    const [fileType, setFileType] = useState("py");
    const [codeText, setCodeText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formattedCode, setFormattedCode] = useState("");

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(fileType, codeText);
        formatCode();
    }

    function formatCode() {
        const apiUrl = "http://localhost:8080/fileContent";
        setIsLoading(true);
        axios.post(
            apiUrl, codeText,
            {
                headers: { 'Content-Type': 'text/plain', 'filetype': fileType }
            }
        ).then(
            response => {
                console.log(response);
                setFormattedCode(response.data);
                setIsLoading(false);
            }
        ).catch(
            error => {
                console.error(error);
                setIsLoading(false);
            }
        )
    }


    return (
        <div className=''>
            <Container className='mb-4 bg-primary text-white min-vw-100 d-flex justify-content-between'>
                <h2 className='p-4'>Code Formatter</h2>
                <div className='p-4'>
                    <Button variant='outine-secondary' className='bg-secondary text-white' onClick={handleSubmit}>Format Code</Button>
                </div>
            </Container>
            <Container className='py-4'>
                <Row className='bg-primary text-white'>
                    <Col xs={6} lg={4} className='align-items-center d-flex'>Select File Type</Col>
                    <Col xs={6} lg={2} className="border-end">
                        <Form.Group className="py-2">
                            <Form.Select
                                aria-label="File Type"
                                className="d-inline"
                                value={fileType}
                                onChange={
                                    (event: React.ChangeEvent<HTMLSelectElement>) => {
                                        setFileType(event.target.value);
                                    }
                                }
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
                    </Col>
                    <Col lg={5} className='align-items-center d-none px-4 d-lg-flex'>
                        Output
                    </Col>
                    <Col className='align-items-center d-none px-4 d-lg-flex justify-self-end'>
                        {
                            isLoading &&
                            <Spinner animation="border" role="status" size='sm' className='mx-2'>
                            </Spinner>
                        }</Col>
                </Row>
            </Container>

            <Container className="m-0 mx-auto h-100">
                <Form >
                    <Row className='justify-content-between overflow-hidden g-4 h-100' style={{ minHeight: "40vh" }}>
                        <Col xs={12} lg={6} className='h-100 border p-0 shadow-0'>
                            <Form.Group className="h-100 w-100 p-2" controlId="exampleForm.ControlTextarea1">
                                {/* <Form.Label>Paste your code here</Form.Label> */}
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    className="w-100 h-100 border-0"
                                    value={codeText}
                                    placeholder='Paste your code here'
                                    onChange={
                                        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                            setCodeText(event.target.value);
                                        }
                                    }
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={12} lg={6} className='h-100 border p-0'>
                            <Form.Group className="h-100 w-100 p-2" controlId="exampleForm.ControlTextarea2">
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    className="w-100 h-100 border-0"
                                    value={formattedCode}
                                    placeholder='Formatted code'
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </Container>
        </div>
    )
}
