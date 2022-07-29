import React from 'react'
import { Container, Row, Col, Form, Card, Button, Alert, CloseButton } from 'react-bootstrap';
function Login() {
    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center my-5'>
                    <Col md={5}>
                        <Card className='shadow'>
                            <Card.Body className='px-5'>
                                <h2>Login</h2>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name='email' />

                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='user_name' type='password' />
                                    </Form.Group>
                                    <Form.Group>
                                        <br></br>
                                        <Button variant='primary' type='submit ' className='btn-block'>Login</Button>
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login