import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { PartList } from './components/PartList';
import { RobotList } from './components/RobotList';

function App() {
  const [selectedPartIds, setSelectedPartIds] = useState([])

  return (
    <Container fluid>
      <Row>
        <h1> Welcome to robot shop</h1>
      </Row>
      <Row>
        <Col md={4} lg={4}>
          <RobotList onRobotSelected={robot => setSelectedPartIds(robot.parts)} />
        </Col>
        <PartList selectedPartIds={selectedPartIds} />
      </Row>
    </Container>
  );
}

export default App;
