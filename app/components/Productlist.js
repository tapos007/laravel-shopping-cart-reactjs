import React, {
    PropTypes,
} from 'react';
import {observer} from "mobx-react";
import CartInfo from '../store/CartInfo';
import Product from './Product';
const Produclist = observer(React.createClass({
    render() {
        var products = CartInfo.allproducts.map((x,index)=>
            <Product key={index} array_key={index} rowId={x.rowId} id={x.id} name={x.name} qty={x.qty} price={x.price} tax={x.tax} />
        );
        return (
            <div>
                {CartInfo.allproducts.length == 0 ? "<h1>no product found</h1>" :
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th className="image">Image</th>
                            <th className="name">Product Name</th>
                            <th className="quantity">Qty</th>
                            <th className="total">Action</th>
                            <th className="price">Unit Price</th>
                            <th className="total">Total</th>

                        </tr>
                        </thead>
                        <tbody>
                            {products}
                        </tbody>
                        

                    </table>
                }
            </div>

        );
    }
}));

export default Produclist;
