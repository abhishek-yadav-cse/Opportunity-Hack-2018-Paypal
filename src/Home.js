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
import { Redirect } from 'react-router-dom';
import indexbg from './images/index.jpg';
import slider1 from './images/index-slider1.jpg';
import slider2 from './images/index-slider2.jpg';


import Modal from 'react-modal';
import filter from './filter.js';

import axios from 'axios';
var jsonfile = require('jsonfile');
const writeJsonFile = require('write-json-file');
var file = './data.json'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


class Home extends Component {

  constructor() {
    super();
    // this.state = {
    //     //modalIsOpen: false
    //     message: ""
    //   };

    let userInfo = {
      fname: '',
      lname: '',
      email: '',
    };

    this.state = userInfo;

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }



  // componentDidMount() {
  //   return fetch('/api')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         message: responseJson.message
  //       });
  //     })
  // }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const userInfo = this.state;

    console.log(JSON.stringify(userInfo));

    // axios.post('http://192.168.88.150:8080/', userInfo)
    //   .then((result) => {
    //     //access the results here....
    //     console.log(result);
    //   });

    // jsonfile.writeFile(file, JSON.stringify(userInfo), function (err) {
    //   console.error(err)
    // })
    writeJsonFile('data.json', { foo: true }).then(() => {
      console.log('done');
    })

    axios({
      method: 'post',
      url: 'http://192.168.88.150:8080/',
      data: JSON.stringify(userInfo)
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))

  }

  onSignUp = () => {
    this.props.history.replace('/signup');
  }


  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/url' />;
    }

    const rightButtons = (
      <div style={{ marginTop: '4px' }}>
        <a href="signin" className="btn btn-outline-success button-sm">Sign In</a>
        <a href="signup" className="btn btn-outline-success button-sm">Sign Up</a>
      </div>
    );
    const leftButtons = (
      <div style={{ marginTop: '4px' }}>
      </div>
    );




    const { fname, lname, email } = this.state;


    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            style={{ position: "fixed", backgroundColor: 'white' }}
            titleStyle={{ fontSize: '20px' }}
            title={null}
            iconElementRight={rightButtons}
            iconElementLeft={<img
              style={{ width: '280px', height: '40px' }}
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
                        <span>We build community</span>
                        <strong class="hero-section__words">
                          <span class="title__effect is-visible"></span>
                          <span class="title__effect">community</span>
                          <span class="title__effect">community</span>
                        </strong>
                      </h2>
                      <div className="title__description">Parks, Recreation and Neighborhood Services Registration System!</div>
                      {/* Options btn color: .btn-success | .btn-info | .btn-warning | .btn-danger | .btn-primary */}
                      <a href="index.html" className="btn btn-outline-success button-sm"></a>

                      <div className="title__action"><a href={filter} className="btn btn-success" onClick={this.submit}>Search</a></div>
                    </div>
                    {/* .title-01 */}
                  </div>
                </div>
              </div>
            </div>
            <div className="button-group" style={{ bottom: 50 }}>
              <a href="index.html" className="btn btn-outline-success button-sm">Home</a>
              <a href="index-color.html" className="btn btn-outline-success button-sm">Reservations</a>
              <a href="index-video.html" className="btn btn-outline-success button-sm">Donations</a>
            </div>
            {/* .hero-section__wrap */}
          </section>
          {/* .hero-section */}
        </div>

        <div style={{ width: '60%', margin: 'auto', marginTop: '20px', textAlign: 'justify', fontSize: '18px' }}>
          <section class="tiles">
            <article class="style1">
              <span class="image">
                <img src={cycling} alt="cycling" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Cycling" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>
            <article class="style2">
              <span class="image">
                <img src={dance} alt="dance" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Dance" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>
            <article class="style2">
              <span class="image">
                <img src={soccer} alt="soccer" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Soccer" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>
            <article class="style2">
              <span class="image">
                <img src={icehockey} alt="icehockey" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Ice Hockey" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>
            <article class="style2">
              <span class="image">
                <img src={therapeutic} alt="therapeutic" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Therapeutic" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>
            <article class="style2">
              <span class="image">
                <img src={tennis} alt="tennis" style={{ width: '230px', height: '180px' }} onClick={() => { this.props.history.push("#"); }} />
              </span>
              <br></br>
              <div align="center">
                <input type="submit" value="Tennis" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold', border: '0', background: 'none' }} onClick={() => { this.props.history.push("#"); }} />
              </div>
            </article>

          </section>
        </div>








      </div>
    );
  }
}

export default Home;
