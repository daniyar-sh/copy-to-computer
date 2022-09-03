import {all, put, takeLatest} from '@redux-saga/core/effects'
import * as types from "../actions/types"
import axios from 'axios'

function* getKitchens() {
    try {
        const kitchenResponse = yield axios.get('http://185.125.46.93:9000/api/kitchen').then(res => res.data)
        yield put({type: types.KITCHENS_RECEIVED, payload: kitchenResponse})
    } catch(error) {
        yield put({type: types.KITCHENS_FAILURE, error})
    }
}

function* deleteKitchen(action) {
    const {data} = action
    try {
        const kitchenResponse = yield axios.delete(`http://185.125.46.93:9000/api/kitchen/${data}`, ).then(res => res.data)
        yield put({type: types.KITCHEN_DELETED, payload: kitchenResponse})
    } catch(error) {
        yield put({type: types.KITCHEN_DELETE_FAILURE, error})
    }
}

function* addKitchen(action) {
    const {data} = action
    try {
        const kitchenResponse = yield axios.post(`http://185.125.46.93:9000/api/kitchen`, data).then(res => res.data)
        yield put({type: types.KITCHEN_ADDED, payload: kitchenResponse})
    } catch(error) {
        yield put({type: types.KITCHEN_ADDED_FAILURE, error})
    }
}

function* editKitchen(action) {
    const {data} = action  
    // {id: 1, name: 'Kitchen"}
    try {
        const kitchenResponse = yield axios.put(`http://185.125.46.93:9000/api/kitchen/${data.id}`, 
        {name: data.name}).then(res => res.data)
        yield put({type: types.KITCHEN_EDITED, payload: kitchenResponse})
    } catch(error) {
        yield put({type: types.KITCHEN_EDITED_FAILURE, error})
    }
}


export function* kitchenSaga() {
    yield all([
        yield takeLatest(types.GET_KITCHENS, getKitchens),
        yield takeLatest(types.DELETE_KITCHEN, deleteKitchen),
        yield takeLatest(types.ADD_KITCHEN, addKitchen),
        yield takeLatest(types.EDIT_KITCHEN, editKitchen)
    ])
}

