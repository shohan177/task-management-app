import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import MemberCard from '../../../components/MemberCard/MemberCard';
import urlString from '../../../constant/urlString';
import { setMembers } from '../../../redux/action/memberAction';
import './Member.css';


function MemberList() {

    let { members } = useSelector(state => state.memberData)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //initiate laod
    useEffect(() => {
        getAllMemeber()
    }, [])

    //delete member
    const handelDelete = (id) => {

        axios.delete('http://localhost:5050/member/' + id).then(res => {
            // console.log(res)
            getAllMemeber()
        })
    }

    //redirect edit
    const handelEdit = (data) => {
        navigate(urlString.MEMEBERUPDATE, {
            state: data
        })
    }

    //get all member
    const getAllMemeber = () => {
        axios.get('http://localhost:5050/member').then(res => {
            dispatch(setMembers(res.data))
        })
    }



    return (
        <>
            <div>
                <NavLink to={urlString.MEMEBERCREATE}><Button variant="success my-3">Add</Button></NavLink>
            </div>
            <Row>
                {members && members.map((data, index) =>

                    <MemberCard key={index} data={data} handelDelete={handelDelete} handelEdit={handelEdit} />
                )}
            </Row>


        </>
    )
}

export default MemberList