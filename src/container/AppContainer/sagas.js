import { takeLatest, call, put, all } from 'redux-saga/effects'
import { getOrders } from './OrderService'
import { fetchOrdersSuccess } from './actions'

function* fetchOrders() {
    try {
        const orders = yield call(
            getOrders,
        )
        yield put(fetchOrdersSuccess(orders))
    } catch (error) {
        console.log(error)
    }
}

function* fetchOrderSaga() {
    yield takeLatest('GET_ORDERS', fetchOrders)
}

export default function* rootSaga() {
    yield all([
        fetchOrderSaga()
    ])
}