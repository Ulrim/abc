import React, { Component } from 'react';
import './css/Login.css';
import { inject, observer } from 'mobx-react';
import { observable }from 'mobx';

@inject('onoff')
@observer
class Login extends Component {
    render() {
        const { onoff } = this.props;
        return (
            <div className="Login">
            <div className="main">
                <div className="close" onClick={ onoff.OnOff }>
                    Close
                </div>
                <div className="title">
                    Sign In With
                </div>
                <div className="otherLogin">
                    <div>
                        Facebook
                    </div>
                    <div>
                        Google
                    </div>
                </div>
                <form>
                <div className="username">
                    <span>Username</span>
                    <input type="text">

                    </input>
                </div>
                <div className="password">
                    <span> 
                        Password
                    </span>
                    <input type="password">

                    </input>
                </div>
                <button className="Sign">
                    <span>Sign In</span>
                </button>
                </form>
                <div className="Join">
                    <span>Sign up Now</span>
                    <span>Password For got?</span>
                </div>
            </div>
        </div>
        );
    }
}

export default observable(Login);