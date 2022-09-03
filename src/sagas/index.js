import {all} from 'redux-saga/effects'
import {authSaga} from './authSaga'
import { kitchenSaga } from './kitchenSaga'
import { resSaga } from './restaurantSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        kitchenSaga(),
        resSaga()
    ])
}
