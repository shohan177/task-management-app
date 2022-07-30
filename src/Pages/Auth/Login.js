import axios from 'axios';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import urlString from '../../constant/urlString';
import { inputLogin, loginIfo } from '../../redux/action/authAction';
import './Auth.css';

function Login() {

    let { inputFields, userInfo } = useSelector(state => state.authData)
    const dispatch = useDispatch()
    let navigate = useNavigate();


    //initiate laod
    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (userInfo) {
            dispatch(loginIfo(userInfo))
            navigate(urlString.DASHBORD)
        }
    }, [])


    const handelLogin = (e) => {

        e.preventDefault()
        axios.get(`http://localhost:5050/user?email=${inputFields.email}&password=${inputFields.password}`).then(res => {

            console.log(res.data[0].name)
            if (res.data.length) {
                let userInfodata = {
                    userName: res.data[0].name,
                    loginStaus: true
                }
                localStorage.setItem('userInfo', JSON.stringify(userInfodata));
                dispatch(loginIfo(userInfodata))
                navigate(urlString.DASHBORD)
            }

        }).catch(err => {
            dispatch(loginIfo({ ...userInfo, error: "Credentials not match" }))
            console.log(err);
        });

    }

    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center login'>
                    <Col md={5}>
                        <Card className='shadow'>
                            <Card.Body className='px-5'>
                                <h2>Login</h2>
                                <Form onSubmit={handelLogin}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name='email' onChange={(e) => dispatch(inputLogin({ ...inputFields, email: e.target.value }))} />

                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='user_name' type='password' onChange={(e) => dispatch(inputLogin({ ...inputFields, password: e.target.value }))} />
                                    </Form.Group>
                                    {userInfo && <p className='text-danger'>{userInfo.error}</p>}
                                    <Form.Group>
                                        <br></br>
                                        <Button variant='primary' type='submit ' className='btn-block'>Login</Button>
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login