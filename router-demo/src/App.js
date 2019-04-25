import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';

import './App.css';

const Home = () => <h1>Banana!</h1>;
const Contact = () => <h1>Strawberry!</h1>;
const NotFound = () => <div>Ain't nothing but a heartache</div>;
const Foot = () => <h6>This is the footer</h6>;
const Header = () => <h6>This is the header</h6>;

const NavBar = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/redirectme">Redirect to fruits</NavLink>
  </div>
);

const Fruits = ({match}) => {
  return <div>
    <Switch>
      <Route path={`${match.url}/:fruitType`} render={({match}) => <div>A {`${ match.params.fruitType }`}</div>} />
      {/* <Route path={`${match.url}/orange`} render={() => <div>An orange!</div>} />
      <Route path={`${match.url}/grapefruit`} render={() => <div>A grapefruit!</div>} /> */}
      <Route render={() => <div>Fruit not found!</div>} />
    </Switch>
  </div>
};

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}
        <NavBar />
        {/* <a href="/contact">Old school contact</a> */}
        <div>
          <Switch>
            {/* <Route children={({match, ...rest}) => {
              return <div>THIS IS THE STUFF IN ROUTE CHILDREN</div>;
            }} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/fruits" component={Fruits} />
            <Redirect from="/redirectme" to="/fruits/oranges" />
            <Route component={NotFound} />
          </Switch>
        </div>
        {/* <Foot /> */}
      </Router>
    );
  }
}

export default App;
