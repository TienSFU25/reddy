import React from 'react';
import logo from './logo.svg';
import './App.css';

class TodoHeader extends React.Component {
  render() {
    return <h1>So much to dooo</h1>
  }
}

class AddTodo extends React.Component {
  render() {
    return (
      <form>
        <textarea placeholder="feed dogg" />
        <div>Press enter to add</div>
      </form>
    );
  }
}

// stateless functional component
// props is an object
// {foo: 'bar, key: index}
const TodoElement = ({ title, complete }) => {
  return (<li>
    {title}
    <input type="checkbox" checked={complete} />
    <button>Delete item</button>
  </li>);
};

const ClearButton = () => {
  return <button>Clear Completed</button>;
};

class TodoList extends React.Component {
  render() {
    // console.log(this.props.foo);
    const toDo = this.props.list;
    const todoElements = toDo.map((value, index) => {
      return <TodoElement key={index}
        foo="bar"
        title={value.title}
        complete={value.complete} />
    });

    return (
      <div>
        <ul>
        {todoElements}
        </ul>
      </div>
    );
  }
}

const TodoCount = (props) => {
  return <div>{`${props.length} items`}</div>
};

class TodoApp extends React.Component {
  render() {
    const toDo = [
      { id: 0, title: 'Learn React', complete: false },
      { id: 1, title: 'Learn Juggle', complete: false },
      { id: 2, title: 'Cook piggies', complete: true },
      { id: 3, title: 'Eat piggies', complete: false },
      { id: 4, title: 'Eat doughnut', complete: true }
    ];

    return <div>
      <TodoHeader />
      <AddTodo />
      <TodoList list={toDo} foo="bar" />
      <TodoCount length={toDo.length} />
      <ClearButton />
    </div>
  }
}

export default TodoApp;
