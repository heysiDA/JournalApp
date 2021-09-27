import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {authReducer} from "../reducers/authReducer";
import {uiReducer} from "../reducers/uiReducer";
import {notesReducer} from "../reducers/notesReducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});

const enhancer = composeEnhancers(
    applyMiddleware( thunk )
);

export const store = createStore(reducers, enhancer);
