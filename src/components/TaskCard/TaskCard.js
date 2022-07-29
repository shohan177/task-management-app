import React from 'react'
import { Col, Button, Badge, ButtonGroup } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import urlString from '../../constant/urlString';
import './TaskCard.css'


function TaskCard() {
    return (
        <>
            <Col md={4}>
                <div className="task-item d-flex ">
                    <div className="task-content">
                        <h4>Task title</h4>
                        <Badge bg="info">shohan</Badge>
                        <tr>
                            <td>Email:</td>
                            <td>shohan.seu61@gmail.com</td>
                        </tr>
                    </div>
                    <div className='task-edit flex-end'>
                        <ButtonGroup>
                            <NavLink to={urlString.TASKUPDATE}><Button variant="outline-info" size='sm'>Update</Button></NavLink>
                            <Button variant="outline-warning" size='sm'>Delete</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default TaskCard