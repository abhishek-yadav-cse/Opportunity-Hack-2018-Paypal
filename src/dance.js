import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './images/logo1.png';
import cycling from './images/cycling.jpeg'
import dance from './images/dance.jpeg'
import icehockey from './images/icehockey.jpeg'
import kayak from './images/kayak.jpeg'
import soccer from './images/soccer.jpeg';
import tennis from './images/tennis.jpeg';
import therapeutic from './images/therapeutic.jpeg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import indexbg from './images/index.jpg';
import slider1 from './images/index-slider1.jpg';
import slider2 from './images/index-slider2.jpg';


class danceClass extends Component {

  render() {

    const rightButtons = (
    <div style={{marginTop: '4px'}}>
      <a href="index.html" className="btn btn-outline-success button-sm">SignIn</a>
      <a href="index.html" className="btn btn-outline-success button-sm">SignUp</a>
    </div>
    );
    const leftButtons = (
    <div style={{marginTop: '4px'}}>
    </div>
    );



    return (
      <div className="App">
      <MuiThemeProvider>
      <AppBar
      style={{ position: "fixed", backgroundColor: 'white' }}
      titleStyle={{fontSize: '20px'}}
      title={null}
      iconElementRight={rightButtons}
      iconElementLeft={<img
                 style={{width: '280px', height: '40px'}}
                 src={logo1}
            />}
      />
      </MuiThemeProvider>


      <script src="./js/modernizr-2.8.3.min.js"></script>
              <script src="./js/jquery-1.12.0.min.js"></script>
      <br/><br/><br/><br/>
      <h3>Activities in 95112</h3>
      <div style={{ width: '60%', margin: 'auto', marginTop: '20px', textAlign: 'justify', fontSize: '18px' }}>
          <section class="tiles">
            
            <article class="style2">
              <span class="image">
                <img src={dance} alt="dance" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Dance" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>
            

          </section>
        </div>


            </div>
          );
        }
      }

export default danceClass;
