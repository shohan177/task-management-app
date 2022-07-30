import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import urlString from '../../../constant/urlString';
import { inputTask } from '../../../redux/action/taskAction';
import './Task.css';

function TaskUpdate() {


    const { state } = useLocation();

    let data = useSelector(state => state.taskData.inputFields)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //initiate laod
    useEffect(() => {
        axios.get('http://localhost:5050/member').then(res => {
            dispatch(inputTask({ ...state, members: res.data }))
        })
    }, [])

    //update submit
    const handelSubmitUpdate = (e) => {
        e.preventDefault()
        if (data.title !== "" && data.discription !== "" && data.assign !== "") {
            dispatch(inputTask({ ...data, error: "" }))
            axios.put('http://localhost:5050/task/' + data.id, {
                title: data.title,
                discription: data.discription,
                assign: data.assign
            }).then(res => {
                dispatch(inputTask({ title: "", discription: "", assign: "" }))
                navigate(urlString.TASK)
                swal("Updated", "Task updated done", "success");
            }
            )
        } else {
            dispatch(inputTask({ ...data, error: "all fields are required !" }))
        }

    }



    return (
        <Row className='d-flex justify-content-center my-5'>
            <Col md={5}>

                <h2>Task Update</h2>
                <Form onSubmit={handelSubmitUpdate}>

                    <Form.Group className='mt-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name='user_name' type='text' value={data?.title} onChange={(e) => dispatch(inputTask({ ...data, title: e.target.value }))} />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Selct Member</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => dispatch(inputTask({ ...data, assign: e.target.value }))}>
                            {data.members.map((item, index) =>
                                < option value={item.name} selected={item.name === data?.assign ? true : false}>{item.name}</option>
                            )
                            }


                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discripation</Form.Label>
                        <Form.Control as="textarea" rows={3} value={data?.discription} onChange={(e) => dispatch(inputTask({ ...data, discription: e.target.value }))} />
                    </Form.Group>


                    <Form.Group>
                        <p className='text-danger'>{data?.error}</p>
                        <br></br>
                        <NavLink to={urlString.TASK}><Button variant='primary' className='btn-block'>Back</Button></NavLink>

                        <Button variant='warning' type='submit' className='btn-block  mx-2'>Submit</Button>
                    </Form.Group>

                </Form>

            </Col>
        </Row >
    )
}

export default TaskUpdate