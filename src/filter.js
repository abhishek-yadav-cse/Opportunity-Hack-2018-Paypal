import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './images/logo1.png';
import './App.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import indexbg from './images/index.jpg';
import slider1 from './images/index-slider1.jpg';
import slider2 from './images/index-slider2.jpg';


class filter extends Component {


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

      <div className="site" id="page">
              <a className="skip-link sr-only" href="#main">Skip to content</a>
              <section className="hero-section hero-section--slider clearfix">
                <div className="hero-section__wrap">
                  {/* Options slick plugin: data-arrows="true/false" | data-dots="true/false" | data-fade="true/false" | data-autoplay="true/false/number" | data-speed="number" */}
                  <div className="hero-section__option" data-init="slick" data-arrows="false" data-dots="true" data-fade="false" data-autoplay={5000} data-speed={3000}>
                    <img src={indexbg} />
                    <img src={slider1} />
                    <img src={slider2} />
                  </div>
                  {/* .hero-section__option */}
                  <div className="container">
                    <div className="row">
                      <div className="offset-lg-2 col-lg-8">
                        <div className="title-01 title-01--11 text-center">
                          <h2 className="title__heading">
                          <span>We </span>
                            <strong class="hero-section__words">
                            <span class="title__effect is-visible">make community</span>
                            <span class="title__effect">build community</span>
                            <span class="title__effect">are community</span>
                            </strong>
                          </h2>
                          <div className="title__description">Parks, Recreation and Neighborhood Services Registration System!</div>
                          {/* Options btn color: .btn-success | .btn-info | .btn-warning | .btn-danger | .btn-primary */}
                          <a href="index.html" className="btn btn-outline-success button-sm">Home</a>

                          <div className="title__action"><a href="#" className="btn btn-success">Search</a></div>
                        </div>
                        {/* .title-01 */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-group" style={{bottom: 50}}>
                  <a href="index.html" className="btn btn-outline-success button-sm">Home</a>
                  <a href="index-color.html" className="btn btn-outline-success button-sm">Reservations</a>
                  <a href="index-video.html" className="btn btn-outline-success button-sm">Donations</a>
                </div>
                {/* .hero-section__wrap */}
              </section>
              {/* .hero-section */}
            </div>


            </div>
          );
        }
      }

export default filter;
