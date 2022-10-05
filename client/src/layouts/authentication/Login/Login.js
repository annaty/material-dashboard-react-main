import React from 'react';

class Login extends React.Component {
    state={
    email: '',
    psw: ''
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;
    }

    handleOnSubmit = (e) => {
        const {email, psw} = this.state;
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit= {this.onSubmit}>
                    <input type="email" name='email' placeholder='email...' required onChange={this.onChange} />
                    <input type="password" name='psw' placeholder='password...' required onChange= {this.onChange} />
                    <button onSubmit= {this.onSubmit}>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;