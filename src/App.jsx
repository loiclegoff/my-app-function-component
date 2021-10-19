import { Container, Row, Col } from 'react-bootstrap'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PartList } from './components/PartList';
import { RobotList } from './components/RobotList';
import globalReducer from './core/reducers';

const store = createStore(globalReducer)

function App() {

  return (
    <Provider store={store}>
      <Container fluid>
        <Row>
          <h1> Welcome to robot shop</h1>
        </Row>
        <Row>
          <Col md={4} lg={4}>
            <RobotList />
          </Col>
          <PartList />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
