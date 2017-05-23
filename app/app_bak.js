import React from  'react';
import Todo from './component/todo';
import List from './component/list';
import Footer from './component/foler';

export default class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: [], filter: 'todo', current: 0};
        this.HandleComplete = this.HandleComplete.bind(this);
        this.handleReopen = this.handleReopen.bind(this);
        this.handleCreated = this.handleCreated.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.getTodos();
    }


    getTodos(filter = null) {
        filter = filter? filter:this.state.filter
        fetch(`/api/todo/${filter}`)
            .then(resp => resp.json()).then(json => {
            if (json.code === 200) {
                this.setState({todos: json.todo});
            }
        })
    }

    handleCreated(value) {
        fetch('/api/todo', {method: 'POST', body: JSON.stringify({content: value})}).then(res => res.json())
            .then(json => {
                if (json.code === 200) {
                    this.getTodos()
                }
            }).catch(err => console.log(err))
    }

    HandleComplete(id) {
        fetch(`/api/todo/${id}/done`, {method: 'PUT'}).then(() => this.getTodos())
    }

    handleReopen(id) {
        fetch(`/api/todo/${id}/reopen`, {method: 'PUT'}).then(() => this.getTodos())
    }

    handleFilter(filter) {
        if (filter === 'todo' || filter === 'all') {
            this.setState({filter: filter});
        }
        this.getTodos(filter);
    }


    render() {
        let todos = this.state.todos;
        return (
            <div>
                <Todo onCreated={this.handleCreated}/>
                <List todos={todos} onComplete={this.HandleComplete} onReopen={this.handleReopen}/>
                <Footer filter={this.state.filter} onChangeFilter={this.handleFilter}/>
            </div>
        )
    }
}