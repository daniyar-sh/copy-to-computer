import {all, put, takeLatest} from '@redux-saga/core/effects'
import * as types from '../actions/types'
import axios from 'axios'





function* getKitchen (action) {
    
    try{
        const kitchenResponse = yield axios.get('http://185.125.46.93:9000/api/kitchen').then(res => res.data)
        yield put({type: types.KITCHENS_RECEIVED, payload: kitchenResponse}) 
    }catch(error) {
        yield put({type: types.KITCHENS_FAILURE, error})
    }
}

function* deleteKitchen (action) {
    const {data} = action
    try{
        const kitchenResponse = yield axios.delete(`http://185.125.46.93:9000/api/kitchen/${data}`).then(res => res.data)
        yield put({type: types.DELETE_KITCHEN, payload: kitchenResponse}) 
    }catch(error) {
        yield put({type: types.KITCHENS_DELETE_FAILURE, error})
    }
}

function* addKitchens(action) {
    const {data} = action
    try{
        const kitchenAddResponse = yield axios.post(`http://185.125.46.93:9000/api/kitchen/`,data).then(res=>res.data)
        yield put({type: types.KITCHENS_ADDED, payload : kitchenAddResponse})    
    }catch(err) {
        yield put({type: types.KITCHENS_ADD_FAILURE, err})
    }
}

function* editKitchens(action) {
    const {data} = action
    try{
        const kitchenAddResponse = yield axios.put(`http://185.125.46.93:9000/api/kitchen/${data.id}`,{name: data.name}).then(res=>res.data)
        yield put({type: types.EDITED_KITCHENS, payload : kitchenAddResponse})    
    }catch(err) {
        yield put({type: types.KITCHENS_EDITED_FAILURE, err})
    }
}



export function* kitchenSaga() {
    yield all([
        yield takeLatest(types.GET_KITCHENS, getKitchen),
        yield takeLatest(types.KITCHENS_DELETE, deleteKitchen),
        yield takeLatest(types.KITCHENS_ADD,addKitchens),
        yield takeLatest(types.KITCHENS_EDIT,editKitchens)
    ])
}
