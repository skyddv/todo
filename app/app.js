/**
 * Created by root on 5/13/17.
 */
import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleclear = this.handleclear.bind(this);
  }
  handleclear(){
    this.props.onTODOCreated(this.state.value);
    this.setState({value:''});
  }
  render(){
    return (
      <div>
          <form class="pure-form">
             <fieldset>
         <legend>DNT PBDATA</legend>
         <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
        <button type="button" classname="pure-button pure-button-primary" onClick={this.handleclear}>Add</button>
    </fieldset>
</form>
      </div>
    )
  }
}

class Todo1 extends React.Component {
  render() {
    return (<div className="prue-g">
          <div className="pure-u-1-24">
            <input type="checkbox" onChange={()=> this.props.onComplate(this.props.id)}/>
          </div>
          <div class="pure-u-1-24">
            {this.props.content}
          </div>
      </div>)
  }
}

class TodoList extends React.Component {
  render(){
    return (
        <div>
        {
          this.props.todos.map((it, i) => <Todo1 key={i} id={i} content={it.content} onComplate={this.props.onComplate}/>)
        }
        </div>
    )
  }
}

export default class app extends React.Component {
  constructor(props) {
    super(props);
    this.state={todos:[]}
    this.HhComple = this.HhComple.bind(this);
    this.HhTodo = this.HhTodo.bind(this);
  }

  HhTodo(value) {
    const todo = {content: value, isComplate:false};
    const todos= this.state.todos
    todos.push(todo);
    this.setState({todos: todos})
  }

  HhComple(id) {
    const todos = this.state.todos;
    todos[id].isComplate = true;
    this.setState({todos:todos})
  }

  render() {
    return (
         <div>
             <Todo onTODOCreated={this.HhTodo}/>
             <TodoList todos={this.state.todos.filter(it => !it.isComplate)} onComplate={this.HhComple}/>
         </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return(<input type="text" onChange={e => this.props.onChange(e.target.value)}/>)
  }
}

class Label extends React.Component {
  render(){
    return(<div>
            out:{this.props.value}
           </div>)
  }
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state={value:''}
    console.log('constructor')
  }

  componentWillMount(){
    console.log('Will')
  }

  componentDidMount(){
    console.log('Did')
  }

  render(){
    console.log('Render')
    return (
    <div>
     <Input onChange={v => this.setState({value: v})}/>
     <Label value={this.state.value}/>
    </div>
      )
  }
}