import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSelectedPart } from '../../core/actions'
import { selectSelectedPartId } from '../../core/selectors'
import { Description } from './Description'

export function Part(props) {
  const dispatch = useDispatch()
  const selectedPartId = useSelector(selectSelectedPartId)

  const onPartSelected = () => {
    debugger;
    dispatch(setSelectedPart(props.part.id))
  }
  return (
    <Card className='mb-2'
      onClick={onPartSelected}
      bg={props.part.id === selectedPartId ? "primary" : "default"}
    >
      <Card.Header>
        <Card.Title>Part {props.part.id} description</Card.Title>
      </Card.Header>
      <Card.Body>
        <Description part={props.part} />
      </Card.Body>
    </Card>
  )
}