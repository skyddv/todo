import React from  'react';
import Todo from './component/todo';
import List from './component/list';
import Footer from './component/foler';

export default class app extends React.Component {
  constructor(props) {
    super(props);
    this.state={todos:[], filter: 'todo', current:0};
    this.HandleComplete = this.HandleComplete.bind(this);
    this.handleReopen = this.handleReopen.bind(this);
    this.handleCreated = this.handleCreated.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }


  getTodos(filter='todo') {
      fetch('/api/todo/${filter}').then(resp => resp.json()).then(json=>{
                      if (json.code === 200) {
                          this.setState({todos:json.todos})
                      }
                  })
  }

  handleCreated(value) {
    // const todo = {content: value, done:false, id: this.state.current += 1};
    // const todos= this.state.todos;
    // todos.push(todo);
    // this.setState({todos: todos, current:todo.id});
      fetch('/api/todo',{method: 'POST', body: JSON.stringify({content: value})}).then(res => res.json())
          .then(json => {
              if (json.code === 200 ) {
                  this.getTodos()
              }
          } ).catch(err => console.log(err))
  }

  HandleComplete(id) {
    const todos = this.state.todos;
    todos.find(it => it.id === id).done = true;
    this.setState({todos:todos});
  }

  handleReopen(id) {
      const todos = this.state.todos;
      todos.find(it => it.id === id).done = false;
      this.setState({todos:todos});
  }

  handleFilter(filter) {
      if (filter === 'todo' || filter === 'all') {
          this.setState({filter:filter});
      }
  }


  render() {
      let todos = this.state.todos;
      if (this.state.filter ==='todo') {
          todos = this.state.todos.filter(it => ! it.done)
      }
      return (
         <div>
             <Todo onCreated={this.handleCreated}/>
             <List todos={todos} onComplete={this.HandleComplete} onReopen={this.handleReopen}/>
             <Footer filter={this.state.filter} onChangeFilter={this.handleFilter}/>
         </div>
    )
  }
}