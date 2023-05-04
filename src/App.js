import React , {useEffect , useState} from 'react';
import { Container  , Col , Row} from 'reactstrap';
import './App.css';
import Axios from "axios"
import Cards from './Card';

function App() {
const [details , setDetails]=useState({})
const fetchDetails = async()=>{
  const {data} = await Axios.get("https://randomuser.me/api/")
  console.log("RESPONSE:", data);

  const details = data?.results[0]
  // console.log(details)
  setDetails(details)
}
useEffect(()=>{
  fetchDetails()
} , [])

  return (
   <Container fluid className=' p-4 bg-primery App'>
    <Row>
      <Col md={4} className="offset-md-4 mt-4">
        <Cards details={details}/>
      </Col>
    </Row>
   </Container>
  );
}
export default App;
