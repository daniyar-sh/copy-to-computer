import {all, put, takeLatest} from '@redux-saga/core/effects'
import * as types from "../actions/types"
import axios from 'axios'
import setAuthToken from '../helpers/setAuthToken'
import jwt_decode from 'jwt-decode'

function* signUp(action) {
    const {data} = action
    try {
        const authResponse = yield axios.post('http://185.125.46.93:9000/api/users/register', data).then(res => res.data)
        yield put({type: types.SIGN_UP_SUCCESS, payload: authResponse})
    } catch(error) {
        yield put({type: types.SIGN_UP_FAILURE, error})
    }
}

function* signIn(action) {
    const {data, navigate} = action

    try {
        const authResponse = yield axios.post('http://185.125.46.93:9000/api/users/login', data).then(res => res.data)
        const {token, role} = authResponse
        localStorage.setItem('token', token)
        setAuthToken(token)
        const decoded = jwt_decode(token)
        yield put({type: types.SET_CURRENT_USER, payload: decoded})
        if (role === 'admin') {
            navigate('/dashboard/restaurants')
        } else {
            navigate('/main')
        }
    } catch(error) {
        yield put({type: types.SIGN_IN_FAILURE, error})
    }
}

export function* authSaga() {
    yield all([
        yield takeLatest(types.SIGN_UP, signUp),
        yield takeLatest(types.SIGN_IN, signIn),
    ])
}

