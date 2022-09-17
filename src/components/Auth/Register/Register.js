import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonLogin } from './Register.style';
import { Container, Card, Title, Column, Form, InputLabel, Input, DivContainer } from '../../GlobalStyles.style';

const Register = () => {
    let navigate = useNavigate(); // Used to route to different URL Pages.
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const handleInputChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    }

    const register = async (event) => {
        event.preventDefault();
        // Object.keys(inputs).map(value => {
        //     if(inputs[value] === "") {

        //     }
        // });
        if((inputs.password === inputs.confirmpassword)) {
            const request = inputs;
            let response = await axios.post(`${process.env.REACT_APP_HEROKU_URL}/auth/register`, request);
            response.data.statusCode===200 && navigate('/login');
        }
    }

    const navigateToLoginPage = () => {
        navigate('/login');
    }

    return (
        <Container>
            <Card>
                <Title>Register</Title>
                <Column>
                    <Form onSubmit={register}>
                        <DivContainer>
                            <InputLabel>Username</InputLabel>
                            <Input 
                                type="text"
                                name="username"
                                value={inputs.username}
                                onChange={handleInputChange}></Input>
                        </DivContainer>
                        <DivContainer>
                            <InputLabel>Email Address</InputLabel>
                            <Input 
                                type="email"
                                name="email"
                                value={inputs.email}
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
                        <DivContainer>
                        <InputLabel>Confirm Password</InputLabel>
                        <Input 
                            type="password"
                            name="confirmpassword" 
                            value={inputs.confirmpassword}
                            onChange={handleInputChange}></Input>
                        </DivContainer>
                        <Button
                            className="mt-3"
                            type="submit"
                            value="submit">
                                Register
                        </Button>
                        <span className="my-0 color-white">
                            <hr></hr>
                        </span>
                        <ButtonLogin
                            type="button"
                            value="button"
                            onClick={navigateToLoginPage}>
                                Login
                        </ButtonLogin>
                    </Form>
                </Column>
            </Card>
        </Container>
    )
}
export default Register;