import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Typography, Input, Button, Divider, Form, notification } from "antd";
import { auth } from "../../../../services/firebase/firebase";

const { Title } = Typography;
 
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    handleFormChange = (value) => {
        this.setState(value);
    }

    handleLogin = async () => {
        this.setState({
            loading: true
        })

        const {email, password} = this.state
        
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response, 'response');
        } catch(error) {
            console.log(error, '>>>>');
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() { 
        return (
            <div className="auth_container">
                <Title level={3}>
                    Login
                </Title>

                <Form onValuesChange={this.handleFormChange}>
                    <Form.Item name="email"> 
                        <Input 
                            type="text"
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item name="password"> 
                        <Input 
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Divider />

                    <Button 
                        type="primary"
                        loading={this.state.loading}
                        onClick={this.handleLogin}
                    >
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;