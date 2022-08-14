import { type } from '@testing-library/user-event/dist/type'
import* as types from '../actions/types'
import isEmpty from '../helpers/isEmpty'

const initialState = {
    isLoading: false,
    isAuth: false,
    error: {}
}
 
export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.SIGN_UP: 
        return{...state, isLoading: true}
        case types.SIGN_UP_SUCCESS:
            return{...state, isLoading: false}
        case types.SIGN_UP_FAILURE :
            return{...state, isLoading: false, error: action.error}
        case types.SIGN_CURRENT_USER :
            return{...state, isAuth: !isEmpty(action.payload) }
        default:
            return state
    }
}