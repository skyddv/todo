/**
 * Created by root on 5/23/17.
 */
import combineReducers from 'redux/lib/combineReducers'
import * as Actions from './action'

const initialState = {
    todos: [],
    filter:'todo',
    next_id:0,
    needFetch: false
};

//todoAPP run as a store
export function todoApp(state=initialState, action) {
    //let todos = [];
    switch(action.type) {
        case Actions.ADD_TYPE:
        //     const todo = {id:state.next_id, content: action.content, done:false };
        //     return Object.assign({}, state, {next_id:state.next_id + 1, todos: [...state.todos, todo]});
            return Object.assign({}, state, {needFetch:true});
        case Actions.DONE_TYPE:
        //     todos = state.todos;
        //     todos.find(it => it.id === action.id).done = true;
            return Object.assign({}, state, {needFetch:true});
        case Actions.REOPEN_TYPE:
        //     todos = state.todos;
        //     todos.find(it => it.id === action.id).done = false;
            return Object.assign({}, state, {needFetch:true});
        case Actions.FILTER_TYPE:
            return Object.assign({}, state, {filter:action.fl, needFetch:true});
        case Actions.LIST_TYPE:
            return Object.assign({}, state, {todos:action.todos, needFetch:false});
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todoApp
});


export default rootReducer;