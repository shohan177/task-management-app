import React from 'react'
import { Row, Col, Badge, Button, ButtonGroup } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import urlString from '../../../constant/urlString';

function TaskDetails() {
    let navigate = useNavigate();
    const { state } = useLocation();

    //edit task
    const handelTaskEdit = (data) => {
        navigate(urlString.TASKUPDATE, {
            state: data
        })
    }
    return (
        <div className='p-5'>
            <Row >
                <Col md={8}>
                    <h3>{state.title}</h3>
                    <Badge bg="info">{state.assign}</Badge>
                </Col>
                <Col md={4} style={{ textAlign: 'end' }}>
                    <ButtonGroup className='shadow'>
                        <Button variant="warning" size='sm' onClick={() => navigate(urlString.TASK)}>Back</Button>
                        <Button variant="info" size='sm' onClick={() => handelTaskEdit(state)}>Update</Button>
                    </ButtonGroup>



                </Col>
            </Row>
            <Row>
                <Col md={12} className="mt-4">
                    <p>
                        {state.discription}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default TaskDetails