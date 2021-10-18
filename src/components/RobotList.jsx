import { Spinner } from 'react-bootstrap'
import { Robot } from './robot/Robot'

export function RobotList(props) {
  if (props.robotList.length < 1) {
    return <Spinner animation='border' />
  }

  return <div>
    {props.robotList.map(robot => <Robot key={robot.id} robot={robot} selectedRobotId={props.selectedRobotId} onRobotSelected={props.onRobotSelected} />)}
  </div>
}
