/**
 * Created by root on 5/14/17.
 */
import React from 'react';
import Item from './item'

export default class List extends React.Component {
    static PropTypes = {
        todos: React.PropTypes.array.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onReopen: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                {
                    this.props.todos.map(it => <Item key={it.id} todo={it}
                                                     onReopen={this.props.onReopen}
                                                     onComplete={this.props.onComplete}/>)
                }
            </div>
        )
    }

}