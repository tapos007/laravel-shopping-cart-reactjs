import { observable, computed  } from 'mobx';
class Cart{

    @observable productList = [];

    @computed get allproducts(){
        return this.productList;
    }

    initializeProduct(){
        $.ajax({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            url: urls.cartlist,
            dataType: 'json',
            cache: false,
            success: function(data) {
               if(data.hasOwnProperty('success')){
                   this.productList = data.products;
               }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    updateProductQty(product_id,qty,rowId){
      this.productList[product_id]['qty'] = qty;
      this.productList[product_id]['qty'] = qty;
        $.ajax({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            url: urls.updateList+"/"+rowId,
            dataType: 'json',
            type: 'PUT',
            cache: false,
            data:{qty:qty},
            success: function(data) {
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    deleteProduct(product_id,rowId){
        $.ajax({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            url: urls.deleteList+"/"+ rowId,
            dataType: 'json',
            type: 'DELETE',
            cache: false,
            success: function(data) {
                console.log(data);
                this.productList.splice(product_id,1);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    @computed get cartTotalInformation(){
        var tax = 0,subtotal = 0;
        this.productList.map(x=>{
            tax +=x.tax;
            subtotal +=(x.qty * x.price);
        });
        return {tax:tax,subtotal:subtotal};
    }

}

const CartInfo = new Cart();
export default CartInfo;