import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import TaskCard from '../../../components/TaskCard/TaskCard';
import urlString from '../../../constant/urlString';
import { setTask } from '../../../redux/action/taskAction';
import './Task.css';


function Task() {


    let { tasks } = useSelector(state => state.taskData)
    const dispatch = useDispatch()
    let navigate = useNavigate();



    //delete task
    const handelDelete = (id) => {
        axios.delete('http://localhost:5050/task/' + id).then(res => {
            console.log(res)
            getAlltask()
        })
    }

    //edit task
    const handelTaskEdit = (data) => {
        navigate(urlString.TASKUPDATE, {
            state: data
        })
    }

    //get all task
    const getAlltask = () => {
        axios.get('http://localhost:5050/task').then(res => {
            dispatch(setTask(res.data))
        })
    }

    //initiate laod
    useEffect(() => {
        getAlltask()
    }, [])


    return (
        <>

            <div>
                <NavLink to={urlString.TASKCREATE}><Button variant="success my-3">Add</Button></NavLink>
            </div>
            <Row className='d-flex justify-content-center'>
                {tasks && tasks.map((data, index) =>

                    <TaskCard data={data} handelDelete={handelDelete} handelEdit={handelTaskEdit} key={index} />
                )}
            </Row>


        </>
    )
}

export default Task