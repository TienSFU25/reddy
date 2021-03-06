import React from 'react';
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
const TodoElement = ({ index, title, complete, check, item }) => {
  return (<li>
    {title}
    <input type="checkbox" checked={complete} onClick={() => {check(item)}} />
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
    const {check} = this.props;

    const todoElements = toDo.map((value, index) => {
      return <TodoElement key={index}
        index={index}
        foo="bar"
        item={value}
        title={value.title}
        complete={value.complete} 
        check={check} />
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
  constructor() {
    super();

    const toDo = [
      { id: 0, title: 'Learn React', complete: false },
      { id: 1, title: 'Learn Make Banh My', complete: false },
      { id: 2, title: 'Cook piggies', complete: true },
      { id: 3, title: 'Eat piggies', complete: true },
      { id: 4, title: 'Eat doughnut', complete: true },
      { id: 5, title: 'Eat banana', complete: false }
    ];

    this.state = {
      toDo: toDo,
      lastId: 0
    };
  }

  _check(id) {
    console.log(`this is ${this}`);
    window.banana = this;

    const toDo = this.state.toDo;
    toDo[id].complete = !toDo[id].complete;

    this.setState({ toDo });
  }

  // sample item
  // { id: 0, title: 'Learn React', complete: false }
  check(newItem) {
    const toDo = this.state.toDo;
    // toDo[id].complete = !toDo[id].complete;
    
    const newTodo = toDo.map((item) => {
      if (newItem.id === item.id) {
        const oldComplete = item.complete;
        item.complete = !oldComplete;
      }

      return item;
    });

    this.setState({ toDo: newTodo });
  }

  render() {
    const toDo = this.state.toDo;
    
    return <div>
      <TodoHeader />
      <AddTodo />
      <TodoList list={toDo} foo="bar" check={this.check.bind(this)} />
      <TodoCount length={toDo.length} />
      <ClearButton />
    </div>
  }
}

export default TodoApp;
