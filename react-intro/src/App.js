import React from 'react';
import logo from './logo.svg';
import './App.css';

// Without JSX
// let App = React.createElement('div', null, 'Hello World!');

// With JSX
// stateless functional way to make a component
let App = () => <div>Hello World with JSX!</div>;
let ThingInsideTheApp = () => <div>This is inside the app</div>;
let Banana = () =>  <div>Hello I am a banana</div>;

// class based way to make a component
class ClassBasedComponent extends React.Component {
  render() {
    return <div className="pretty">
      <div>Class based component</div>
      <div>The other div</div>
    </div>;
  }
}

// conditional rendering
class RandomNumberComponent extends React.Component {
  render() {
    const randomNumber = parseInt(Math.random() * 100);
    const IsOdd = () => randomNumber % 2 == 0 ?
      <div>Is even</div> :
      <div>Is odd</div>;

    // way 2
    const str = randomNumber % 2 == 0 ? "even" : "odd";
    const IsOdd2 = () => <div>{`Is ${str}`}</div>;

    return <div>
      {`The number is ${randomNumber}`}
      <IsOdd />
      <IsOdd2 />
    </div>
  }
}

// iterative rendering
class ListOfSkillsComponent extends React.Component {
  render() {
    const skills = ['React', 'Talk Crap', 'Make fun of guinea pigs'];
    return <ul>
      {
        skills.map((skill, i) => <li key={i} className={`foo${i}`}>{skill}</li>)
      }
    </ul>;
  }
}

// JSX is equivalent to React.create_element('div', props, child);
App = () => (<div id="our-app">
  <RandomNumberComponent />
  <ListOfSkillsComponent />
  <br />
  <br />
  <br />
  <br />
  <ThingInsideTheApp />
  <Banana>
    <div className="thing-inside-banana" />
    <div>This is also inside the banana</div>
  </Banana>
  <div className="self-closing-div" />
  <ClassBasedComponent />
</div>);

export default App;
