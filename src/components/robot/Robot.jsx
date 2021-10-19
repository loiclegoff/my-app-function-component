import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSelectedRobot } from '../../core/actions'
import { selectSelectedRobotId } from '../../core/selectors'
import { Label } from './Label'
import { Visual } from './Visual'

export function Robot(props) {
  const dispatch = useDispatch()
  const selectedRobotId = useSelector(selectSelectedRobotId)

  const onRobotSelected = (robot) => {
    dispatch(setSelectedRobot(robot.id))
  }

  return (
    <Card
      className='mb-2'
      onClick={() => onRobotSelected(props.robot)}
      bg={props.robot.id === selectedRobotId ? "primary" : "default"}
    >
      <Card.Header>
        <Card.Title>Robot {props.id} description</Card.Title>
      </Card.Header>
      <Card.Body>
        <Label title={props.robot.title} id={props.robot.id} />
        <Visual
          type={props.robot.visual_type}
          src={props.robot.visual_src}
        />
      </Card.Body>
    </Card>
  )
}