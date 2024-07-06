import React from "react";
import { Typography, Input, Button, Divider } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import './index.css'

const { Title } = Typography


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            headline: '',
            email: '',
            password: ''
        }
    }

    handleChangeInput = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleRegister = () => {
        const { email, password } = this.state
        createUserWithEmailAndPassword(auth, email, password)
    }

    render() {
        return (
            <div className="auth_register_container">
                <Title level={2}>
                    Register
                </Title>

                <div>
                    <Input
                        type="text" 
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div>
                    <Input
                        type="text" 
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChangeInput}
                    />
                </div>
                    
                <div>
                    <Input 
                        type="text"
                        name="headline"
                        placeholder="Headline"
                        onChange={this.handleChangeInput}
                    />
                </div>
                    
                <div>
                    <Input
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div>
                    <Input
                        type="password" 
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChangeInput}
                    />
                </div>

                    
                <Divider />

                <Button type="primary" onClick={this.handleRegister}>
                    Register
                </Button>


            </div>
        )
    }
}

export default Register;