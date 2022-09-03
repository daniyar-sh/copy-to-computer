import {all, put, takeLatest} from '@redux-saga/core/effects'
import * as types from "../actions/types"
import axios from 'axios'

function* getRestaurants(action) {
    const {data} = action
    try {
        const kitchenResponse = yield axios.get(`http://185.125.46.93:9000/api/restaurant?query=${data.query}&page=${data.page}`).then(res => res.data)
        yield put({type: types.RESTAURANTS_RECEIVED, payload: kitchenResponse})
    } catch(error) {
        yield put({type: types.RESTAURANTS_FAILURE, error})
    }
}

function* addRestaurant(action) {
    const {data} = action
    const fm = new FormData()
    fm.append('name', data.name)
    fm.append('location', data.location)
    fm.append('phone', data.phone)
    fm.append('amountOfPlace', data.amountOfPlace)
    fm.append('averageBill', data.averageBill)
    fm.append('rate', data.rate)
    fm.append('image', data.image)
    fm.append('kitchens', data.kitchens)
    try {
        const kitchenResponse = yield axios.post(`http://185.125.46.93:9000/api/restaurant`, fm).then(res => res.data)
        yield put({type: types.RESTAURANT_ADDED, payload: kitchenResponse})
    } catch(error) {
        yield put({type: types.RESTAURANT_ADD_FAILURE, error})
    }
}

export function* resSaga() {
    yield all([
        yield takeLatest(types.GET_RESTAURANTS, getRestaurants),
        yield takeLatest(types.ADD_RESTAURANT, addRestaurant)
    ])
}