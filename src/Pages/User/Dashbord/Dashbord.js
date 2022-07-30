import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import urlString from '../../../constant/urlString';
import './Dashboard.css';


function Dashbord() {
    return (
        <>
            <Container className='bg-light dashboard'>
                <Row className='d-flex justify-content-center'>

                    <Col md={4}>
                        <NavLink to={urlString.TASK}>
                            <div class="itemBox bg-info shadow">
                                <div class="pt-2">
                                    <h3>Task</h3>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={4}>
                        <NavLink to={urlString.MEMEBER}>
                            <div class="itemBox bg-warning shadow">
                                <div class="pt-2">
                                    <h3>Members</h3>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Dashbord