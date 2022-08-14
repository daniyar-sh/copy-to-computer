import * as types from './types'

export function getKitchen() {
    return {type:types.GET_KITCHENS}
}   

export function deleteKitchen(data) {
    return {type:types.DELETE_KITCHEN}
}   

export function addKitchens(data) {
    return{type:types.KITCHENS_ADD, data}
}

export function editKitchens(data) {
    return{type:types.KITCHENS_EDIT, data}
}