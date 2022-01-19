import react,{useState,useEffect} from "react";
import axios from 'axios'
import { Row,Col,Card,CardBody, Label, Button,Modal,ModalBody,ModalHeader,ModalFooter,Form,Input } from 'reactstrap';

const Update=()=>{
    const updateData=async()=>{
  const data=await axios({
    method: 'post',
    url: 'http://localhost:5000/api/update',
    data: {
        name: name,
        updatedName:updatedName
        
      }
  });
  console.log({data})
  
  getdata()
  delToggle()
    }

    const getdata=async()=>{
        const data=await axios({
          method: 'get',
          url: 'http://localhost:5000/api/getdata',
          
        });
        console.log({data})
        setuser(data.data.data.user)
        
          }

         

          useEffect(() => {
            getdata()
        }, [])

    
    const [user, setuser] = useState([])
   
    const [modal, setmodal] = useState(false)
    const [name, setname] = useState("")
    const [updatedName, setupdatedName] = useState("")
    const delToggle=()=>{
        setmodal(!modal)
    }
    const updateName=()=>{
        updateData()
    }
    console.log(user)
return(
    <div>
        
        <Row>
            <Col>
            {
              user&&user.map((item=>( <Card className="mt-2">
              <CardBody>
                  
                      <Label>User name is  {item.name}&nbsp;<Button onClick={()=>{setname(item.name); setmodal(true)}} >Edit</Button></Label>
                  
              </CardBody>
          </Card>)))   
            }
             {modal?
                        <Modal isOpen toggle={delToggle}>
            <ModalHeader toggle={delToggle} style={{backgroundColor:"#becdda8f"}}><h5 style={{fontWeight:"bold"}}>Update Name</h5></ModalHeader>
            <ModalBody>
            <Form >
                  <Input
                    type="text"
                    placeholder="Name..."
                    aria-label="Name"
                    className="rounded-pill search-input"
                    value={updatedName}
                    onChange={({ target }) => setupdatedName(target.value)}
                  />
                  
                </Form>
          </ModalBody>
        <ModalFooter>
                     <Button className="mr-2" variant="contained" color="danger" onClick={() =>delToggle()}>No</Button>
                  <Button variant="contained" style={{backgroundColor:"#28a745",color:"white"}} onClick={() =>updateName()}>Yes</Button>
          
        </ModalFooter>
            </Modal>
            :null}
           
            </Col>
        </Row>
    </div>
)
}

export default Update;