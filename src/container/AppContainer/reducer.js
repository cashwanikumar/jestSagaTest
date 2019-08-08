const initialState = {
    orders: [],
}

function getOrdersReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ORDERS_SUCCESS':
            {
                state = Object.assign({}, state, { orders: action.orders });
                return state
            }

        default:
            return state
    }
}

export default getOrdersReducer