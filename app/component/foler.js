/**
 * Created by root on 5/14/17.
 */
import React from 'react'

export default class Footer extends React.Component {
    static PropTypes = {
        filter:React.PropTypes.oneOf(['todo', 'all']),
        onChangeFilter: React.PropTypes.func.isRequired
    };

    render() {
        if (this.props.filter === 'todo') {
            return (
                <div><a href="#" onClick={() => this.props.onChangeFilter('all')}>show all</a></div>
            )
        }
        return (
            <div>
                <a href="#" onClick={() => this.props.onChangeFilter('todo')}>show todo</a>
            </div>
        )
    }
}