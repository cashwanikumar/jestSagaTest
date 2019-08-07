import React, { Component } from "react";
import { CallMe, CallMeAgain } from "./helper";
import { KeyMapping } from "../config/config";
import { KIWI } from '../constants/constants'

export default class Order extends Component {
  render() {
    return (
      <div>
        This is order component
        <CallMe />
        <CallMeAgain />
        <p>
          {KeyMapping[KIWI[0]]}
        </p>
      </div>
    );
  }
}
