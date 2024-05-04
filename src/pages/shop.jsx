import { Row, Col} from 'react-bootstrap'
import  ProductItem from '../components/productItem'
import {products} from '../data/items'

function Shop(){
    return (
        <Row sx={1} md={4} className='g-4'>
             {products.map((item) => (
                  <Col align='center' key={item.id}>
                 <ProductItem product={item}/>
                  </Col>
             ))}
           
        </Row>
    )
}

export default Shop