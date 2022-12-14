import React from 'react';
import { Badge, Button, ButtonGroup, Col } from 'react-bootstrap';
import './TaskCard.css';


function TaskCard({ data, handelDelete, handelEdit, handelTaskDetails }) {
    const toShow = data.discription.substring(0, 70) + "...";
    return (
        <>
            <Col md={4}>
                <div className="task-item d-flex bg-warning">
                    <div className="task-content" >
                        <h4 className='task-title' onClick={() => handelTaskDetails(data)}>{data?.title}</h4>
                        <Badge bg="info">{data?.assign}</Badge>
                        <p className='mt-2'>
                            {toShow}
                        </p>
                    </div>
                    <div className='task-edit flex-end'>
                        <ButtonGroup>
                            <Button variant="outline-primary" size='sm' onClick={() => handelEdit(data)}>Update</Button>
                            <Button variant="outline-danger" size='sm' onClick={() => handelDelete(data?.id)}>Delete</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default TaskCard