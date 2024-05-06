import { useState, useContext } from "react";
import { Navbar , Button, Modal, ModalHeader,  ModalBody } from "react-bootstrap";
import { BsCart } from 'react-icons/bs'
import { CartContex } from "../content/cartContent";
import CartProduct from './CartProduct'

export default function ComponentNav() {
    const [showModal, setShowModal] = useState(false);

const cart = useContext(CartContex)

const productCount = cart.items.reduce(
    (sum, product) => sum = sum + product.quantity,
0)
console.log(productCount)

    const handelShow = () =>{
        setShowModal(true)
    }
    const handelClose = () =>{
        setShowModal(false)
    }
    return (
        <>
        <Navbar className="border-bottom border-secondary">
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handelShow}
            variant="outline-success"
             className="text-wite"> 
             ({productCount})<BsCart className = 'mx-2'></BsCart> سبد خرید </Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={showModal} onHide={handelClose} contentClassName="card-bg" dir='rtl'>
        <ModalHeader >
           
            <ModalBody>
                { productCount > 0 ? (
                    <>
                    <h3 className="mb-4">سبد خرید</h3>
                    { cart.items.map((item) =>
                <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                )}
                <h3> مجموع قیمت : { cart.getTotalAmount()} تومان </h3>
                    </>
                ): (<h3> سبد خرید خالی است </h3>)}
                 <Button onClick={handelClose} className="mt-4 mx-3" variant='danger'>X</Button>
            </ModalBody>
        </ModalHeader>
    </Modal>
    </>
    )
    
}
 
