import React, {
    PropTypes,
} from 'react';
import {observer} from "mobx-react";
import CartInfo from '../store/CartInfo';
const GrandtTotal = observer(React.createClass({
    render() {
        return (
            <div>
                <table className="table table-striped table-bordered ">
                    <tbody>
                    <tr>
                        <td><span className="extra bold">Sub-Total :</span></td>
                        <td><span className="bold">${CartInfo.cartTotalInformation.subtotal}</span></td>
                    </tr>
                    <tr>
                        <td><span className="extra bold">VAT (15%) :</span></td>
                        <td><span className="bold">${CartInfo.cartTotalInformation.tax}</span></td>
                    </tr>
                    <tr>
                        <td><span className="extra bold totalamout">Total :</span></td>
                        <td><span className="bold totalamout">${CartInfo.cartTotalInformation.subtotal + CartInfo.cartTotalInformation.tax}</span></td>
                    </tr>
                    </tbody>
                </table>
                <input type="submit" value="CheckOut" className="btn btn-orange pull-right"/>
                <input type="submit" value="Continue Shopping"
                       className="btn btn-orange pull-right mr10"/>
            </div>
        );
    }
}));

export default GrandtTotal;
