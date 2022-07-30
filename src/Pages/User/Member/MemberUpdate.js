import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import urlString from '../../../constant/urlString';
import { inputMember } from '../../../redux/action/memberAction';

import './Member.css';


function MemberUpdate() {
    const { state } = useLocation();

    let data = useSelector(state => state.memberData.inputFields)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //initiate laod
    useEffect(() => {
        dispatch(inputMember(state))
    }, [])

    //handel update member
    const handelUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5050/member/' + data.id, data).then(res => {

            navigate(urlString.MEMEBER)
        }
        )
    }


    return (
        <Row className='d-flex justify-content-center my-5'>
            <Col md={5}>

                <h2>Member Update</h2>
                <Form onSubmit={handelUpdate}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' value={data.email} onChange={(e) => dispatch(inputMember({ ...data, email: e.target.value }))} />

                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' value={data.name} onChange={(e) => dispatch(inputMember({ ...data, name: e.target.value }))} />
                    </Form.Group>
                    <Form.Group>
                        <br></br>
                        <NavLink to={urlString.MEMEBER}><Button variant='primary' className='btn-block'>Back</Button></NavLink>

                        <Button variant='warning' type='submit' className='btn-block  mx-2'>Submit</Button>
                    </Form.Group>

                </Form>

            </Col>
        </Row>

    )
}

export default MemberUpdate