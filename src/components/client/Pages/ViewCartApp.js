import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ViewCartApp = () => {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} >
      <i class="bi bi-bag-check-fill"></i> Cart
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}  closeButton  centered >
     
       <Container>
        
        <table className="table  bg-white  ">
              <thead >
                <tr className=" ">
                  <th scope="col">#</th>
                
                  <th scope="col">ProductsName</th>
                  <th scope="col">Images</th>
                  <th scope="col">Price</th>
                  <th scope="col">Power</th>
                  <th scope="col">Capacity</th>
             
                </tr>
                </thead>
                </table>
  
       </Container>
        
      </Modal>
    </>
  );
}

