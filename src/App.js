import './App.css';
import { Form, Button ,Container,Navbar,Row,Col} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const App=()=> {
  const [sessions,setSessions]=useState([])
  const [pinCode,setPinCode]=useState()
  const [date,setDate]=useState()

  const handleSubmit=()=>{
    const apiUrl=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=${date}`
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setSessions(data.sessions))
  }
  const columns=[
    {
      text:"Center Id",
      dataField:"center_id"
    },
    {
      text:"Name",
      dataField:"name",
      headerStyle: () => {
        return { width: '150px'};
      }
    },
    {
      text:"Address",
      dataField:"address",
      headerStyle: () => {
        return { width: '150px'};
      }
    },
    {
      text:"State",
      dataField:"state_name"
    },
    {
      text:"District",
      dataField:"district_name"
    },
    {
      text:"Min Age",
      dataField:"min_age_limit"
    },
    {
      text:"Vaccine",
      dataField:"vaccine",
      headerStyle: () => {
        return { width: '150px'};
      }
    },
    {
      text:"Fee Type",
      dataField:"fee_type"
    },
    {
      text:"Fee",
      dataField:"fee"
    },
    {
      text:"Available Dose 1",
      dataField:"available_capacity_dose1"
    },
    {
       text:"Available Dose 2" ,
       dataField:"available_capacity_dose2"
    }
  ]
    return (
      <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand >
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        COjab
      </Navbar.Brand>
    </Navbar>
    <Container className='mt-10'>
      <Row>    
        <Col>
        <Form.Group>
          <Form.Label className='font-weight-bold'>Pin Code</Form.Label>
          <Form.Control type="number" placeholder="Pin Code" value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group>
          <Form.Label className='font-weight-bold'> Date</Form.Label>
          <Form.Control placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </Form.Group>
        </Col>
       </Row>
       <div className="col-md-12 text-center" width="215">
        <Button variant="primary" onClick={()=>handleSubmit()} className='mx-auto'>
          Submit
        </Button>
        </div>
        <div className="table-responsive mt-10">

        {sessions.length>0?<BootstrapTable keyField='session_id' data={ sessions } columns={ columns } />:
        <div >
          <h1 className='font-weight-bold text-center'>
            No Sessions Available
           </h1> 
          </div>
        }
        </div>
     </Container>
     
     </>
  )
}

export default App;
