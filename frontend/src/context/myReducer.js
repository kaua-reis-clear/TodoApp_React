export const INITIAL_STATE = { data: [] }

export function myReducer(state, action) {
    switch(action.type) {
        case 'REQUESTED_TODOS':
          return { ...state, data: action.payload.data }

        default:
          throw new Error()
    }
}