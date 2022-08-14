import* as types from '../actions/types'

const initialState = {
    isLoading: false,
    kitchens: [],
    error: ''
}
 
export default function kitchenReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_KITCHENS: 
        return{...state, isLoading: true}
        case types.KITCHENS_RECEIVED:
            return{...state, isLoading: false, kitchens: action.payload}
        case types.KITCHENS_FAILURE :
            return{...state, isLoading: false, error: action.error}
        case types.KITCHENS_DELETE:
            return{...state, isLoading: true}
        case types.DELETE_KITCHEN:
            return{...state, isLoading: false, kitchens: state.kitchens.filter(item => item.id !== action.payload.kitchenId)}
        case types.KITCHENS_ADD:
            return{...state,isLoading:true}
        case types.KITCHENS_ADDED:
            return{...state,isLoading:false, kitchens: [...state.kitchens, action.payload]}
        case types.KITCHENS_ADD_FAILURE:
            return{ isLoading: true,  error: action.error}
        case types.EDITED_KITCHENS:
            return{...state, isLoading: false, kitchens: state.kitchens.map(item => item.id == action.payload.kitchenId ? {
                name: action.payload.name,
                id: action.payload.kitchenId,
            } : item)}    
        default:
            return state
    }
}