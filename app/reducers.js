/**
 * Created by root on 5/23/17.
 */
import combineReducers from 'redux/lib/combineReducers'
import * as Actions from './action'

const initialState = {
    todos: [],
    filter:'todo',
    next_id:0
};

//todoAPP run as a store
export function todoApp(state=initialState, action) {
    let todos = [];
    switch(action.type) {
        case Actions.ADD_TYPE:
            const todo = {id:state.next_id, content: action.content, done:false };
            return Object.assign({}, state, {next_id:state.next_id + 1, todos: [...state.todos, todo]});
        case Actions.DONE_TYPE:
            todos = state.todos;
            todos.find(it => it.id === action.id).done = true;
            return Object.assign({}, state, {todos});
        case Actions.REOPEN_TYPE:
            todos = state.todos;
            todos.find(it => it.id === action.id).done = false;
            return Object.assign({}, state, {todos});
        case Actions.FILTER_TYPE:
            return Object.assign({}, state, {filter:action.fl});
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todoApp
});


export default rootReducer;