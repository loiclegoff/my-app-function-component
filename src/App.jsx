import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const [robotList, setRobotList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/robots')
      const robotList = await resp.json()
      setRobotList(robotList)
    }
    fetchData()
  }, [])

  return (
    <Container fluid>
      <Row>
        <h1> Welcome to robot shop</h1>
      </Row>
      <Row>
        <Col md={4} lg={4}>
          {JSON.stringify(robotList)}
        </Col>
        <Col md={4} lg={4} />
        <Col md={4} lg={4} />
      </Row>
    </Container>
  );
}

export default App;
