import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import urlString from '../../../constant/urlString';
import { inputTask } from '../../../redux/action/taskAction';
import './Task.css';


function TaskCreate() {

    let data = useSelector(state => state.taskData.inputFields)
    const dispatch = useDispatch()
    let navigate = useNavigate();


    //initiate laod
    useEffect(() => {

        axios.get('http://localhost:5050/member').then(res => {
            dispatch(inputTask({ ...data, members: res.data }))
        })
    }, [])

    //submit task 
    const handelSubmit = (e) => {
        e.preventDefault()
        if (data.title !== "" && data.discription !== "" && data.assign !== "") {
            dispatch(inputTask({ ...data, error: "" }))
            axios.post('http://localhost:5050/task', {
                title: data.title,
                discription: data.discription,
                assign: data.assign
            }).then(res => {

                dispatch(inputTask({ title: "" }))
                navigate(urlString.TASK)
            }
            )
        } else {
            dispatch(inputTask({ ...data, error: "all fields are required !" }))
        }
    }


    return (
        <Row className='d-flex justify-content-center my-5'>
            <Col md={5}>

                <h2>Create Task</h2>
                <Form onSubmit={handelSubmit}>

                    <Form.Group className='mt-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name='user_name' type='text' onChange={(e) => dispatch(inputTask({ ...data, title: e.target.value }))} />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Selct Member</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => dispatch(inputTask({ ...data, assign: e.target.value }))}>
                            <option>Open this select menu</option>
                            {data.members?.map((data, index) =>

                                <option value={data.name}>{data.name}</option>
                            )}

                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discripation</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => dispatch(inputTask({ ...data, discription: e.target.value }))} />
                    </Form.Group>

                    <p className='text-danger'>{data?.error}</p>
                    <Form.Group>
                        <br></br>
                        <NavLink to={urlString.TASK}><Button variant='primary' className='btn-block'>Back</Button></NavLink>

                        <Button variant='warning' type="submit" className='btn-block  mx-2'>Submit</Button>
                    </Form.Group>

                </Form>

            </Col>
        </Row>

    )
}

export default TaskCreate