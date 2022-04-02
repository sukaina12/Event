import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Auth extends Component {
    login() {
        //alert("Login Called")
        console.warn("state", this.state)
        fetch("http://localhost:4000/api/auth/login", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        })
    }


    render() {
        return (
            <div>
                <div>
                    <input type='text' placeholder='Username' className='form-control form-group'
                        onChange={(e) => { this.setState({ username: e.target.value }) }} />
                    <br /><br />
                    <input type='text' placeholder='Password' className='form-control form-group'
                        onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    <br /><br />
                    <button onClick={() => this.login()} className='btn btn-danger btn-block' >LOGIN</button>
                </div>

            </div>
        )
    }
}

export default Auth;