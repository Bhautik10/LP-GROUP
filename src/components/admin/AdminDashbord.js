 import React from 'react'
import { Container, Row } from 'react-bootstrap'


 
 export const AdminDashbord = () => {
   return (
     <div> 
     <Container fluid="true" id='admin-dashboard' >

     <Row>
     <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-primary">
      Total Customers <i className='bi bi-person-add f-3'></i> <span className="badge bg-danger ms-2">4</span>
    </button>
    
    </div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-dark">
    Total Products <i className='bi bi-cart f-3'></i><span className="badge bg-danger ms-2">4</span>
  </button>
  </div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-info">
    Total Orders <i className='bi bi-truck f-3'></i><span className="badge bg-danger ms-2">4</span>
  </button>
  </div>
    
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>

    <button type="button" className="btn btn-success">
    Manage Feedback <i className='bi bi-book f-3'></i><span className="badge bg-danger ms-2">4</span>
    </button>
    </div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-warning">
    Manage Reviews <i className='bi bi-comment f-3'></i><span className="badge bg-danger ms-2">4</span>
    </button></div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-danger">
    Manage Notifications <i className='bi bi-bell f-3'></i><span className="badge bg-danger ms-2">4</span>
    </button>
    </div>
    </Row>
       </Container>
     </div>
   )
 }
 