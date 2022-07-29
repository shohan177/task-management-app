import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MemberCard from '../../../components/MemberCard/MemberCard';
import urlString from '../../../constant/urlString';
import './Member.css';


function MemberList() {
    return (
        <>
            <div>
                <NavLink to={urlString.MEMEBERCREATE}><Button variant="success my-3">Add</Button></NavLink>
            </div>
            <Row>
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />

            </Row>


        </>
    )
}

export default MemberList