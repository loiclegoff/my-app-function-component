import { Card } from 'react-bootstrap'
import { Description } from './Description'

export function Part(props) {
  return (
    <Card className='mb-2'>
      <Card.Header>
        <Card.Title>Part {props.part.id} description</Card.Title>
      </Card.Header>
      <Card.Body>
        <Description part={props.part} />
      </Card.Body>
    </Card>
  )
}