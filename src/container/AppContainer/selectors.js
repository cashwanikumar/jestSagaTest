import { createSelector } from 'reselect'
import { List } from 'immutable'

export const orderDetails = state => {
    return state.get('orders')
}

export const orders = createSelector(
    [orderDetails],
    orderDetail => orderDetail || List()
)