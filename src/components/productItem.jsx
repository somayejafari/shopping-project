//import React from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Form, Row,
Col } from "react-bootstrap"
import propTypes from 'prop-types';
import { useContext } from "react";
import { CartContex } from "../content/cartContent";

const ProductItem = ( { product } ) =>{
  const cart = useContext(CartContex)
  const productQuantity = cart.getProductQuantity(product.id)
    return(
        <Card className="mt=5 card-bg">
            <CardBody>
                <CardImg variant="top" 
                src={product.image} 
                height= '200px'
                 style={{objectFit : 'cover'}}  />
                <CardTitle align = 'right' className=" pt-4">
                    {product.title}
                </CardTitle>
                <CardText align = 'right' dir="rtl">
                    {product.price} تومان</CardText>
             {productQuantity > 0 ? (
                <>
                <Form as = {Row}>
                    <Form.Label column='true' sm='6'>
                        تعداد :  {productQuantity}
                    </Form.Label>
                    <Col sm='6'>
                    <Button onClick={() => cart.addItemToCart(product.id)}
                    sm='6' className="mx-2" variant="success">+</Button>
                    <Button onClick={() => cart.removeItemFromCart(product.id)}
                    sm='6' className="mx-2" variant="danger"> -</Button>
                    </Col>
                </Form>
                <Button onClick={() => cart.deleteFromCart(product.id)}
                 className="my-4" variant="danger" size="sm">حذف از سبد خرید</Button>
                </>
             ) : (
                <Button 
                onClick={() => cart.addItemToCart(product.id)}
                variant="primary" >
                    افزودن به سبد خرید
                </Button>
             )}
            </CardBody>
        </Card>
    )
}
export default ProductItem
ProductItem.propTypes= {
    product : propTypes.object
    // ({
    //     price : propTypes.number.isRequired,
    // title : propTypes.string.isRequired,
    // image : propTypes.string.isRequired}).isRequired   
};

// Hello.propTypes = {
//     name: PropTypes.string.isRequired
//   }