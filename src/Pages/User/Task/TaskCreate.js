import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import urlString from '../../../constant/urlString';
import './Task.css'

function TaskCreate() {
    return (
        <Row className='d-flex justify-content-center my-5'>
            <Col md={5}>

                <h2>Create Task</h2>
                <Form>

                    <Form.Group className='mt-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='user_name' type='text' />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Selct Member</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discripation</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>


                    <Form.Group>
                        <br></br>
                        <NavLink to={urlString.TASK}><Button variant='primary' className='btn-block'>Back</Button></NavLink>

                        <Button variant='warning' className='btn-block  mx-2'>Submit</Button>
                    </Form.Group>

                </Form>

            </Col>
        </Row>

    )
}

export default TaskCreate