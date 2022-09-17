import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Login.style';
import { Container, Card, Title, Column, Form, InputLabel, Input, DivContainer, Span } from '../../GlobalStyles.style';

const Login = () => {
    let navigate = useNavigate(); // Used to route to different URL Pages.
    const [inputs, setInputs] = useState({
        emailORusername: "",
        password: ""
    });
    const [response, setResponse] = useState(null);

    const handleInputChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    }

    const login = async (event) => {
        event.preventDefault();
        const request = inputs;
        let response = await axios.post(`${process.env.REACT_APP_HEROKU_URL}/auth/login`, request);
        setResponse(response);
        console.log("login creds: ", response);
        if(response.data.statusCode===200) {
            sessionStorage.setItem("emailORusername", request.emailORusername);
            sessionStorage.setItem("password", request.password);
            sessionStorage.setItem("userId", response.data.userData._id);
            // localStorage.setItem("emailORusername", request.emailORusername);
            // localStorage.setItem("password", request.password);
            localStorage.setItem("userId", response.data.userData._id);
            navigate('/feeds');
        } 
        // response.data.statusCode===200 && navigate('/feeds');
    }

    return (
        <Container>
            <Card>
                <Title>Login</Title>
                <Column>
                    <Form onSubmit={login}>
                        <DivContainer>
                            <InputLabel>Username or Email</InputLabel>
                            <Input 
                                type="text"
                                name="emailORusername"
                                value={inputs.emailORusername}
                                onChange={handleInputChange}></Input>
                        </DivContainer>
                        <DivContainer>
                            <InputLabel>Password</InputLabel>
                            <Input 
                                type="password"
                                name="password" 
                                value={inputs.password}
                                onChange={handleInputChange}></Input>
                        </DivContainer>
                        {
                            response?.data.statusCode===500 && 
                            <Span>
                                {response?.data.statusMessage}
                            </Span>
                        }
                        <Button
                            className="mt-3"
                            type="submit"
                            value="submit">
                                Login
                        </Button>
                    </Form>
                </Column>
            </Card>
        </Container>
    )
}
export default Login;