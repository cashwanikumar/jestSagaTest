export const fetchOrders = () => ({
    type: 'GET_ORDERS',
})

export const fetchOrdersSuccess = orders => ({
    type: 'GET_ORDERS_SUCCESS',
    orders,
})