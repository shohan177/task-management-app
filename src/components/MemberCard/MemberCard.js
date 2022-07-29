import React from 'react'
import { Col, Button, ButtonGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import urlString from '../../constant/urlString'
import './MemberCard.css'


function MemberCard() {
    return (
        <>
            <Col md={4}>
                <div className="member-item d-flex ">
                    <div className="member-logo">
                        <img src={"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"} alt="" width={100} circle={true} />
                    </div>
                    <div className="member-content">
                        <tr>
                            <td>Name:</td>
                            <td>Sarwar jahan Shohan</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>shohan.seu61@gmail.com</td>
                        </tr>
                        <ButtonGroup>

                            <NavLink to={urlString.MEMEBERUPDATE}><Button variant="outline-info" size='sm'>Update</Button></NavLink>
                            <Button variant="outline-warning" size='sm'>Delete</Button>
                        </ButtonGroup>
                    </div>

                </div>
            </Col>
        </>
    )
}

export default MemberCard