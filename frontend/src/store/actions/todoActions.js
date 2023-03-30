import { REQUESTED_TODOS, INPUTED_TODO } from '../../constants/constants';
import axios from 'axios';

export function getTodos() {
  return function(dispatch) {
    return axios.get('http://localhost:8080').then((request) => {
      dispatch({
        type: REQUESTED_TODOS,
        payload: request.data,
      });
    });
  }
  
}

export function changeDesc(e) {
    return {
        type: INPUTED_TODO,
        payload: e.target.value
    }
}