import { fromJS } from "immutable";

const initialState = fromJS({
    orders: fromJS([]),
})

function getOrdersReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ORDERS_SUCCESS':
            {
                return state.set('orders', fromJS(action.orders))
            }

        default:
            return state
    }
}

export default getOrdersReducer