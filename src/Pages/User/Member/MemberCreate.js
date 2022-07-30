import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import urlString from '../../../constant/urlString';
import { inputMember } from '../../../redux/action/memberAction';
import './Member.css';


function MemberCreate() {

    let data = useSelector(state => state.memberData.inputFields)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //create member
    const handelSubmit = (e) => {
        e.preventDefault()
        if (data.email !== "" && data.name !== "") {
            axios.post('http://localhost:5050/member', data).then(res => {
                dispatch(inputMember({}))
                navigate(urlString.MEMEBER)
            }
            )
        } else {
            dispatch(inputMember({ ...data, error: "all fields are required !" }))
        }

    }

    return (
        <>
            <Row className='d-flex justify-content-center my-5'>
                <Col md={5}>

                    <h2>Create Member</h2>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group>
                            <Form.Label>Email </Form.Label>
                            <Form.Control name='email' value={data.email} onChange={(e) => dispatch(inputMember({ ...data, email: e.target.value }))} />

                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='user_name' type='text' value={data.name} onChange={(e) => dispatch(inputMember({ ...data, name: e.target.value }))} />
                        </Form.Group>

                        <p className='text-danger'>{data?.error}</p>
                        <Form.Group>
                            <br></br>
                            <NavLink to={urlString.MEMEBER}><Button variant='primary' className='btn-block'>Back</Button></NavLink>

                            <Button variant='warning' type='submit' className='btn-block  mx-2'>Submit</Button>
                        </Form.Group>

                    </Form>

                </Col>
            </Row>


        </>
    )
}

export default MemberCreate