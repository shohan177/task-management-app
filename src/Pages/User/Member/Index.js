import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import './Member.css';


function Member() {
    return (
        <>
            <Container className='bg-light member p-3'>
                <Outlet />
            </Container>

        </>
    )
}

export default Member