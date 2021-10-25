import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { PartList } from './components/parts/PartList';
import { RobotList } from "./components/robots/RobotList";
import { reducer } from './core/reducer';

const store = createStore(reducer)

function App() {
  const [selectedPartIds, setSelectedPartIds] = useState([])
  return (
    <Provider store={store}>
      <div className='App'>
        {selectedPartIds}
        <Row>
          <Col md={4} lg={4}><RobotList setSelectedPartIds={setSelectedPartIds} selectRobotId={selectedPartIds}/> </Col>
          <Col md={4} lg={4}><PartList selectedPartIds={selectedPartIds}/> </Col>
        </Row>

      </div>
    </Provider>
    
  )

}

export default App;
