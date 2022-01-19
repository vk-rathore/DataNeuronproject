// import 'react-resizable/css/style.css';
import {Resizable} from'react-resizable';
import { useState,useEffect } from 'react';
import { Row,Col } from 'reactstrap';
// import { ResizableBox } from 'react-resizable';
// import '../css/styles.css';
// import './example.css';
import './app.css'
import Text from './text'
import Add from './add';
import Update from './update';

 

function App() {
  const [width, setWidth] = useState(700)
  const [height, setHeight] = useState(328)
  const [width1, setWidth1] = useState(700)
  const [height1, setHeight1] = useState(328)
  const [width2, setWidth2] = useState(1430)
  const [height2, setHeight2] = useState(200)
  const onResize = (event, {element, size, handle}) => {
    setWidth(size.width)
    setHeight(size.height)
    
  };
  const onResize1 = (event, {element, size, handle}) => {
    setWidth1(size.width)
    setHeight1(size.height)
    
  };
  const onResize2 = (event, {element, size, handle}) => {
    setWidth2(size.width)
    setHeight2(size.height)
    
  };
  return (
    <div style={{background:"gray"}}>
      <Row>
        <Col>
        <Resizable height={height} width={width} onResize={onResize} style={{overflow:"hidden"}} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
        <div className="box" style={{width:width + 'px', height: height + 'px'}}>
        <Add/>
        </div>
      </Resizable>
        </Col>
        <Col>
        <Resizable height={height1} width={width1} onResize={onResize1} style={{overflow:"hidden"}} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
        <div className="box" style={{width:width1 + 'px', height: height1 + 'px'}}>
        <Update/>
        </div>
      </Resizable>
        </Col>
      
      </Row>
      <Row>
        <Col>
           <Resizable height={height2} width={width2} onResize={onResize2} style={{overflow:"hidden"}} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
        <div className="box" style={{width:width2 + 'px', height: height2 + 'px'}}>
        <Text/>
        </div>
      </Resizable>
        </Col>
      </Row>

      

   
      
    </div>
  );
}

export default App;
