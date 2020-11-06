import React from "react";

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

    login = event => {
        console.log(this.state.credentials);
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
            </div>
        );   
    }
};

export default Login;