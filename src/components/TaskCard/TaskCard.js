import React from 'react';
import { Badge, Button, ButtonGroup, Col } from 'react-bootstrap';
import './TaskCard.css';


function TaskCard({ data, handelDelete, handelEdit }) {

    return (
        <>
            <Col md={4}>
                <div className="task-item d-flex ">
                    <div className="task-content">
                        <h4>{data?.title}</h4>
                        <Badge bg="info">{data?.assign}</Badge>
                        <p>

                        </p>
                    </div>
                    <div className='task-edit flex-end'>
                        <ButtonGroup>
                            <Button variant="outline-info" size='sm' onClick={() => handelEdit(data)}>Update</Button>
                            <Button variant="outline-warning" size='sm' onClick={() => handelDelete(data?.id)}>Delete</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default TaskCard