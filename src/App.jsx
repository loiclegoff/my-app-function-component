import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { PartList } from './components/PartList';
import { RobotList } from './components/RobotList';

const getPartIdsFromRobotId = (robotList, id) => {
  const currentRobot = robotList.find((robot) => robot.id === id)
  return currentRobot?.parts ?? []
}

function App() {
  const [robotList, setRobotList] = useState([])
  const [selectedRobotId, setSelectedRobotId] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/robots')
      const robotList = await resp.json()
      setRobotList(robotList)
    }
    fetchData()
  }, [])

  const handleOnRobotSelected = (id) => {
    setSelectedRobotId(id)
  }

  const selectedPartIds = getPartIdsFromRobotId(robotList, selectedRobotId)

  return (
    <Container fluid>
      <Row>
        <h1> Welcome to robot shop</h1>
      </Row>
      <Row>
        <Col md={4} lg={4}>
          <RobotList robotList={robotList} selectedRobotId={selectedRobotId} onRobotSelected={handleOnRobotSelected} />
        </Col>
        <PartList selectedPartIds={selectedPartIds} />
      </Row>
    </Container>
  );
}

export default App;
