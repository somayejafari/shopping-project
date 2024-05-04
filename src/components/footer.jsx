import { Row, Col } from "react-bootstrap";
import { BsInstagram  } from "react-icons/bs";
import { BsTelegram  } from "react-icons/bs";
import { BsWhatsapp  } from "react-icons/bs";
export default function MyFooter(){
   return <footer className="text-center text-lg-left"> 
    <div className='container text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Row xs={1} md={2}>
            <Col align= 'center'> 
            <h3 className="fw-bold">WebShopping</h3>
            <p>راه های ارتباطی با ما</p>
            <a href="#" className="mx-2"> 
<BsInstagram /> 
             </a>
  <a href="#" className="mx-2">
  <BsTelegram  />
    </a>    
<a href="#" className="mx-2">
<BsWhatsapp  />
</a>
            </Col>
            <Col align= 'center'>
                 <h4>بخش های سایت</h4>
                 <a href="#" style={{color: 'black', textDecoration: 'none'}}>صفحه ی اصلی</a><br />
                 <a href="#" style={{color: 'black', textDecoration: 'none'}}>سبد خرید</a><br />
                 <a href="#" style={{color: 'black', textDecoration: 'none'}}>پشتیبانی</a><br />
                 </Col>
        </Row>
        
         </div>
    </footer> 
}