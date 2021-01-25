import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({});
const actions = {
    delete(state, action) {
        const user = action.payload;
        return {
            ...state,
            users: state.users.filter(i => i.id !== user.id)
        }

    },

    update(state, action) {
        const updated = action.payload;
        return {
            ...state,
            users: state.users.map(i => i.id === updated.id ? updated : i)
        }
    },

    create(state, action) {
        const user = action.payload;
        user.id = Math.random();
        return {
            ...state,
            users: [...state.users, user]
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type];
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext