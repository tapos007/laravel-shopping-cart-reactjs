import React, {Component} from 'react';
import {render} from 'react-dom';
import CartInfo from './store/CartInfo';
import Productlist from './components/Productlist';
import GrandTotal from './components/GrandTotal';
var App = React.createClass({
    componentDidMount() {
        CartInfo.initializeProduct();
    },

    render(){
        return (
            <section id="product">
                <div className="container">

                    <h1 className="heading1"><span className="maintext"> Shopping Cart</span><span className="subtext"> All items in your  Shopping Cart</span>
                    </h1>
                    <div className="cart-info">
                        <Productlist/>

                    </div>

                    <div className="container">
                        <div>
                            <div className="col-lg-4 pull-right">
                                <GrandTotal/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

render(<App />, document.getElementById('maincontainer'));
