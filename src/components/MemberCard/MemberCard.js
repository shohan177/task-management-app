import React from 'react'
import { Button, ButtonGroup, Col } from 'react-bootstrap'
import './MemberCard.css'


function MemberCard({ data, handelDelete, handelEdit }) {
    return (
        <>
            <Col md={4}>
                <div className="member-item d-flex ">
                    <div className="member-logo">
                        <img src={"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"} alt="" width={100} circle={true} />
                    </div>
                    <div className="member-content">
                        <tr>
                            <td>Name: </td>
                            <td>{data?.name}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{data?.email}</td>
                        </tr>
                        <ButtonGroup>

                            <Button variant="outline-info" size='sm' onClick={() => handelEdit(data)}>Update</Button>
                            <Button variant="outline-danger" size='sm' onClick={() => handelDelete(data?.id)}>Delete</Button>
                        </ButtonGroup>
                    </div>

                </div>
            </Col>
        </>
    )
}

export default MemberCard