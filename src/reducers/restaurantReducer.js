import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    restaurants: [],
    total: 0,
    error: ''
}

export default function resReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_RESTAURANTS:
            return {...state, isLoading: true}
        case types.RESTAURANTS_RECEIVED:
            return {...state, isLoading: false, restaurants: action.payload.restaurants.rows, total: action.payload.restaurants.count}
        case types.RESTAURANTS_FAILURE:
            return {...state, isLoading: false, error: action.error}
        case types.RESTAURANT_ADDED:
                return {...state, isLoading: false, restaurants: [...state.restaurants, action.payload]}
        default:
            return state
        }
    }
