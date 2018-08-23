<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>




//
//
//
//
//
//
//
//
//
// Tiles code
<div style={{width: '60%', margin: 'auto', marginTop: '20px', textAlign: 'justify', fontSize: '18px'}}>
  <section class="tiles">
      <article class="style1">
          <span class="image">
              <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}}/>
          </span>
          <br></br>
          <div align="center">
              <input type="submit" value="Activity1" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
      <article class="style2">
          <span class="image">
                <img src={logo} alt="Logo" style={{width: '230px', height: '180px'}} onClick={() => {this.props.history.push("#");}} />
          </span>
          <br></br>
          <div align="center">
                <input type="submit" value="Activity2" style={{fontSize: '20px',color: 'black',fontWeight:'bold',border: '0', background: 'none'}} onClick={() => {this.props.history.push("#");}}/>
          </div>
      </article>
   </section>
  </div>
  //
  //
  //
  //
  //
  //
  //
  //
  //






  //
  //
  //
  //
  //
  //
  //
  //
  //
  // modalCODE
  <div>
    <button onClick={this.openModal}>Open Modal</button>
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >

      <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
      <button onClick={this.closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  </div>
//
//
//
//
//
//
//
//
//
//







<br/><br/><br/><br/><br/><br/><br/><br/><br/>


      <p className="App-intro">
      //Message from our API: <b>{this.state.message}</b>
      </p>

      <form onSubmit={this.onSubmit}>
        <input type="text" name="fname" value={fname} onChange={this.onChange} />
        <input type="text" name="lname" value={lname} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
