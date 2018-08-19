import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Filter from './filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/filter" component={Filter} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;