
import {useState,useEffect} from "react";
import axios from 'axios'
import { Row,Card,CardBody, Label } from 'reactstrap';

const Text=()=>{
    const getdata=async()=>{
      if(process.env.NODE_ENV === "production"){
        const data=await axios({
          method: 'get',
          url: '/api/getdata',
          
        });
        console.log({data})
        setcount(data.data.data.count[0].current)
      }else{
        const data=await axios({
          method: 'get',
          url: 'http://localhost:5000/api/getdata',
          
        });
        console.log({data})
        setcount(data.data.data.count[0].current)
      }
        
        
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