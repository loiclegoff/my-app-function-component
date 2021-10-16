import { Card } from 'react-bootstrap'
import { Label } from './Label'
import { Visual } from './Visual'

export function Robot(props) {
  return (
    <Card className='mb-2'>
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