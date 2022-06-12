import React from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap"; 

const InfoPage = ({ username, email, password }) => {
    return (
        <div>
            <Row className="border-bottom pt-3">
                <Col md={1}>
                    <Form>
                        <Form.Check type="checkbox">

                        </Form.Check>
                    </Form>
                </Col>
                <Col>
                    <h5>
                        { username }
                    </h5>
                    <p>{ email }</p>
                    <p>{ password }</p>
                </Col>
                <Col md={2}>
                    <Form>
                        <Button variant="info" className="my-2 btn-block">Edit</Button>
                    </Form>
                    <Form>
                        <Button variant="danger " className="my-2 btn-block">Delete</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default InfoPage;