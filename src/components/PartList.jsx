import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setParts } from '../core/actions'
import { selectPartsFromSelectedRobot } from '../core/selectors'
import { PartDetail } from './part-detail/PartDetail'
import { Part } from './part/Part'

export function PartList(props) {
  const [selectedPartId, setSelectedPartId] = useState(undefined)
  const dispatch = useDispatch()
  const parts = useSelector(selectPartsFromSelectedRobot)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/parts')
      const partList = await resp.json()
      dispatch(setParts(partList))
    }
    fetchData()
  }, [dispatch])

  // reset selected part id when robot selection is updated
  useEffect(() => {
    setSelectedPartId(undefined)
  }, [props.selectedPartIds])


  return <><Col md={4} lg={4}>
    {parts.map(part => <Part key={part.id} part={part} onPartClicked={() => setSelectedPartId(part.id)} selectedPartId={selectedPartId} />)}
  </Col>
    <Col md={4} lg={4}>
      <PartDetail
        parts={parts}
        selectedPartId={selectedPartId}
      />
    </Col>
  </>
}
