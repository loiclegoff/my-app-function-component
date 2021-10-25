import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import { PartList } from './components/parts/PartList';
import { RobotList } from "./components/robots/RobotList";

function App() {
  const [selectedPartIds, setSelectedPartIds] = useState([])
  return (
    <div className='App'>
      {selectedPartIds}
      <Row>
        <Col md={4} lg={4}><RobotList setSelectedPartIds={setSelectedPartIds} selectRobotId={selectedPartIds}/> </Col>
        <Col md={4} lg={4}><PartList selectedPartIds={selectedPartIds}/> </Col>
      </Row>

    </div>
  )

}

export default App;
