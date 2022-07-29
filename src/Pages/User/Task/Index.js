import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap';
import './Task.css'
function index() {
    return (
        <Container className='bg-light task p-3'>
            <Outlet />
        </Container>
    )
}

export default index