import React from 'react'
import { Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap'
import './Hader.css'
import { Link, NavLink } from 'react-router-dom'
import urlString from '../../constant/urlString'

const Hader = () => {
    return (
        <>
            <header className='header shadow'>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col md={4} style={{ textAlign: 'start' }}>
                            <div className="logo">
                                <Link to='/'><img src={"https://icon2.cleanpng.com/20180517/iye/kisspng-task-management-action-item-computer-icons-to-do-5afd1a83d5a7f8.8806772015265368358751.jpg"} alt="" width={50} /></Link>
                                <h4 className='mx-3'>Task Manager</h4>
                            </div>
                        </Col>
                        <Col md={6} style={{ textAlign: 'end' }}>
                            <nav className='menu'>
                                <ul>
                                    <li><NavLink to={urlString.DASHBORD}>Dashboard</NavLink> </li>
                                    <li><NavLink to={urlString.TASK}>Task</NavLink> </li>
                                    <li><NavLink to={urlString.MEMEBER}>Memeber</NavLink> </li>
                                </ul>
                            </nav>
                        </Col>
                        <Col md={2} style={{ textAlign: 'end' }}>
                            <DropdownButton
                                variant="outline-secondary"
                                title="shohan"
                                id="input-group-dropdown-1"

                            >
                                <Dropdown.Item href="#">Log Out</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>

            </header>

        </>
    )
}

export default Hader
