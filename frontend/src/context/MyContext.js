import React, { createContext, useReducer, useContext , useState} from 'react'
import { INITIAL_STATE, myReducer } from './myReducer'
import axios from 'axios'

export const MyContext = createContext(INITIAL_STATE)

export function MyProvider({children}) {
    const [state, dispatch] = useReducer(myReducer, INITIAL_STATE)
    
    const [peidaNao, setPeidaNao] = useState(false)


    function getTodos() {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080').then((request) => {
            console.log(request.data)
            dispatch({
              type: 'REQUESTED_TODOS',
              payload: {
                data: request.data
              },
            });
            resolve(request.data);
          });
      })
    }
    
    const value = {
        data: state.data,
        getTodos,
        peidaNao,
        setPeidaNao
    }

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export function useTodo() {
    const context = useContext(MyContext)

    return context
}