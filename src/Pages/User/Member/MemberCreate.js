import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import urlString from '../../../constant/urlString';

import './Member.css';


function MemberCreate() {
    return (
        <>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={5}>

                    <h2>Create Member</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' />

                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='user_name' type='text' />
                        </Form.Group>
                        <Form.Group>
                            <br></br>
                            <NavLink to={urlString.MEMEBER}><Button variant='primary' className='btn-block'>Back</Button></NavLink>

                            <Button variant='warning' className='btn-block  mx-2'>Submit</Button>
                        </Form.Group>

                    </Form>

                </Col>
            </Row>


        </>
    )
}

export default MemberCreate