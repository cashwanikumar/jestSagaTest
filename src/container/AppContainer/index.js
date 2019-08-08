import { connect } from 'react-redux'
import Order from '../../component/Order'

import { fetchOrders } from './actions'

const mapStateToProps = state => ({
    orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
    fetchOrders: () =>
        dispatch(fetchOrders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)