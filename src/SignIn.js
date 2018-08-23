import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from 'material-ui/AppBar';
import logo1 from './images/logo1.png';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100
};

const panelStyle = {
    backgroundColor: 'rgba(255,255,255,0.5)',
    border: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: 300,
};

const buttonStyle = {
    marginBottom: 0
};

class SignIn extends Component {

    handleFormSubmit(e) {
        e.preventDefault();

        console.log("FORM SUBMIT!");

    }

    render() {
        const rightButtons = (
            <div style={{ marginTop: '4px' }}>
              {/* <a href="signin" className="btn btn-outline-success button-sm">Sign In</a> */}
              <a href="signup" className="btn btn-outline-success button-sm">Sign Up</a>
            </div>
          );
          const leftButtons = (
            <div style={{ marginTop: '4px' }}>
            </div>
          );
        return (
            //   <div style={divStyle}>
            <div>
                <MuiThemeProvider>
                    <AppBar
                        style={{ position: "fixed", backgroundColor: 'white' }}
                        titleStyle={{ fontSize: '20px' }}
                        title={null}
                          iconElementRight={rightButtons}
                        iconElementLeft={<a href='/'><img
                            style={{ width: '280px', height: '40px' }}
                            src={logo1}
                        /></a>}
                    />
                </MuiThemeProvider>
                <br /><br /><br /><br /><br />
                <center>
                <Panel style={panelStyle}>
                    <Form horizontal className="LoginForm" id="loginForm">
                        <FormGroup controlId="formEmail">
                            <FormControl type="email" placeholder="Email Address" />
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup style={buttonStyle} controlId="formSubmit">
                            <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                                Login
              </Button>
                        </FormGroup>
                    </Form>
                </Panel>
                </center>
            </div>
        )
    }
}

export default SignIn;
