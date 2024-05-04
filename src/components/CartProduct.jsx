import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContex } from "../content/cartContent";
import { getProductData } from "../data/items";
import { propTypes } from "react-bootstrap/esm/Image";

function CartProduct({id, quantity}){
    const cart = useContext(CartContex)
    const productData = getProductData(id)
    return (
        <>
        <p>{productData.title}</p>
        <p> تعداد : {quantity}</p>
        <p> قیمت : {quantity * productData.price}</p>
        <Button 
        size="sm"
        className="mb-5"
        variant="secundery"
        onClick={() => cart.deleteFromCart(id)}>حذف</Button>
        </>
    )
}
CartProduct.propTypes= {
   id : propTypes.string,
   quantity : propTypes.number  
};
export default CartProduct