import { Spinner } from 'react-bootstrap'
import { Robot } from './robot/Robot'

export function RobotList(props) {
  if (props.robotList.length < 1) {
    return <Spinner animation='border' />
  }

  return <div>
    <Robot robot={props.robotList[0]} />
  </div>
}
