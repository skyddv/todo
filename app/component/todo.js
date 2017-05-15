/**
 * Created by root on 5/14/17.
 */
import React from 'react';

export default class Todo extends React.Component {
    static PropTypes = {
        onCreated: React.PropTypes.func.isRequired
    };
    constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleCreate = this.handleCreate.bind(this);
  }

    handleCreate(){
    this.props.onCreated(this.state.value);
    this.setState({value:''});
  }

     render(){
        return (
             <div>
                <form className="pure-form">
                    <fieldset>
                        <legend>DNT PBDATA</legend>
                        <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
                        <button type="button" className="pure-button pure-button-primary" onClick={this.handleCreate}>Add</button>
                    </fieldset>
                 </form>
             </div>
        )
     }
}