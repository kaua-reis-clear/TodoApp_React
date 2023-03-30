import { REQUESTED_TODOS, INPUTED_TODO } from '../../constants/constants';
const INITIAL_STATE = {
    data: []
};

export default function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUESTED_TODOS:
      return {
        ...state,
        data: action.payload,
      };

    case INPUTED_TODO:
        return {
            ...state,
            desc: action.payload
        }

    default:
      return state;
  }
}
