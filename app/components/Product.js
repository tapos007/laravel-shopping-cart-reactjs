import React, {
    PropTypes,
} from 'react';
import {observer} from "mobx-react";
import CartInfo from '../store/CartInfo';
const Product = observer(React.createClass({
    getInitialState() {
        return {
            qunatity: this.props.qty
        };
    },
    changeQty(){
       var quantity = parseInt(this.refs.quantity.value);
        console.log(typeof quantity);

        if(quantity>0){
            this.setState({
                qunatity:quantity,
            });
            CartInfo.updateProductQty(this.props.array_key, quantity, this.props.rowId);
        }else{
            this.setState({
                qunatity:0,
            });
        }


    },
    deleteProduct(e){
        e.preventDefault();
        CartInfo.deleteProduct(this.props.array_key, this.props.rowId);
        
    },
    render() {
        return (
            <tr>
                <td className="image"><a href="#"><img title="product" alt="product" src={urls.image_loc +"/"+ this.props.id+".jpg"} height="50" width="50"/></a></td>
                <td  className="name"><a href="#">{this.props.name}</a></td>
                <td className="quantity"><input type="text"  ref="quantity" onChange={this.changeQty} value={this.state.qunatity} name="quantity" className="col-lg-1"/>

                </td>
                <td className="total"> <a href="#"><img className="tooltip-test" data-original-title="Update" src={urls.imge_another+"/"+ "update.png"} alt=""/></a>
                    <a href="#" onClick={this.deleteProduct}><img className="tooltip-test" data-original-title="Remove"  src={urls.imge_another+"/"+ "remove.png"} alt=""/></a></td>


                <td className="price">${this.props.price}</td>
                <td className="total">${this.props.price * this.props.qty}</td>

            </tr>
        );
    }
}));

export default Product;
