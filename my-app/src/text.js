
import react,{useState,useEffect} from "react";
import axios from 'axios'
import { Row,Col,Card,CardBody, Label,Form,Input, Button } from 'reactstrap';

const Text=()=>{
    const getdata=async()=>{
        const data=await axios({
          method: 'get',
          url: 'http://localhost:5000/api/getdata',
          
        });
        console.log({data})
        setcount(data.data.data.count[0].current)
        
          }

          const [count, setcount] = useState(0)

          useEffect(() => {
            getdata()
        }, [])
    
  
   
return(
    <div>
       <Row>
            <Card>
<CardBody><Label>Total number of api calls is {count}</Label></CardBody>
            </Card>
            
        </Row>
    </div>
)
}

export default Text;