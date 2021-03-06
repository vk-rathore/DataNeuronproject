import {useState} from "react";
import axios from 'axios'
import { Row,Col,Card,CardBody, Label,Form,Input, Button } from 'reactstrap';

const Add=()=>{
    const addData=async()=>{
      if(process.env.NODE_ENV === "production"){
        await axios({
    method: 'post',
    url: '/api/add',
    data: {
        name: name,
        
      }
    
  });
      }else{
        await axios({
          method: 'post',
          url: 'http://localhost:5000/api/add',
          data: {
              name: name,
              
            }
          
        });
      }
  

  window.location.reload()
 
  
    }

    const [name, setname] = useState("")
    
  
   
return(
    <div>
        <Row>
            <Card>
<CardBody><Label>Enter Your name</Label></CardBody>
            </Card>
            
        </Row>
        <Row>
            <Col>
            <Card className="mt-2" >
                <CardBody>
                <Form >
                  <Input
                    type="text"
                    placeholder="Name..."
                    aria-label="Name"
                    className="rounded-pill search-input"
                    value={name}
                    onChange={({ target }) => setname(target.value)}
                  />
                  
                </Form>
                <Button onClick={addData} className="mt-2">Submit</Button>
                </CardBody>
            </Card>
            </Col>
        </Row>
    </div>
)
}

export default Add;