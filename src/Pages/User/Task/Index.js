import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './Task.css';
function index() {
    return (
        <Container className='bg-light task p-3'>
            <Outlet />
        </Container>
    )
}

export default index