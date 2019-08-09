import { connect } from 'react-redux'
import Order from '../../component/Order'
import { orders } from './selectors'
import { fetchOrders } from './actions'

const mapStateToProps = state => ({
    orders: orders(state),
})

const mapDispatchToProps = dispatch => ({
    fetchOrders: () =>
        dispatch(fetchOrders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)