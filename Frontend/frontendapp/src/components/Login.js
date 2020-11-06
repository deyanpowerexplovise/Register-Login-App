import React from "react";
import api from "../api/api";

class Login extends React.Component{

    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    inputChanged = (event) => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    login = async (event) => {
        const response = await api.post("/auth/", JSON.stringify(this.state.credentials));
        this.props.userLogin(response.data);
    }

    register = async (event) => {
        const response = await api.post("/api/users/", JSON.stringify(this.state.credentials));
        console.log(response.data);
    }
    
    render(){
        return (
            <div className="login-component">
                <h1>Login User</h1>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged} />
                <br/>
                <label>Password:</label>
                <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChanged} />
                <br />
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        );   
    }
};

export default Login;