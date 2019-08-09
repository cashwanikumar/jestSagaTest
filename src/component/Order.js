import React, { Component } from "react";
import { CallMe, CallMeAgain } from "./helper";
import { KeyMapping } from "../config/config";
import { KIWI } from '../constants/constants'

export default class Order extends Component {

  componentDidMount() {
    const { fetchOrders } = this.props
    fetchOrders()
  }

  render() {
    const { orders } = this.props
    return (
      <div>
        This is order component
        <CallMe />
        <CallMeAgain />
        <p>
          {KeyMapping[KIWI[0]]}
        </p>
        <ol>
          {orders.toJS().map(order => {
            return <li key={order.id}>{order.name}</li>
          })}
        </ol>
      </div>
    );
  }
}
