import axios from 'axios';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import urlString from '../../constant/urlString';
import { inputLogin, loginIfo } from '../../redux/action/authAction';

function Login() {

    let { inputFields, userInfo } = useSelector(state => state.authData)
    const dispatch = useDispatch()

    let navigate = useNavigate();


    //initiate laod
    useEffect(() => {
        if (userInfo.loginStaus) {
            navigate(urlString.DASHBORD)
        }
    }, [])


    const handelLogin = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:5050/user?email=${inputFields.email}&password=${inputFields.password}`).then(res => {

            console.log(res.data[0].name)
            if (res.data.length) {
                dispatch(loginIfo({
                    userName: res.data[0].name,
                    loginStaus: true
                }))
                navigate(urlString.DASHBORD)
            }

        })

    }

    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center my-5'>
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