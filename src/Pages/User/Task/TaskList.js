import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import TaskCard from '../../../components/TaskCard/TaskCard';
import { NavLink } from "react-router-dom";
import './Task.css';
import urlString from '../../../constant/urlString';


function Task() {
    return (
        <>

            <div>
                <NavLink to={urlString.TASKCREATE}><Button variant="success my-3">Add</Button></NavLink>
            </div>
            <Row className='d-flex justify-content-center'>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </Row>


        </>
    )
}

export default Task