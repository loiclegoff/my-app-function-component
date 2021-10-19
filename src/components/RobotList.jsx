import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRobots } from '../core/actions';
import { selectRobots } from '../core/selectors';
import { Robot } from './robot/Robot'

export function RobotList(props) {
  const [selectedRobotId, setSelectedRobotId] = useState(undefined)
  const dispatch = useDispatch()
  const robotList = useSelector(selectRobots)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/robots')
      const robotList = await resp.json()
      dispatch(setRobots(robotList))
    }
    fetchData()
  }, [dispatch])

  const onRobotSelected = (robot) => {
    props.onRobotSelected(robot)
    setSelectedRobotId(robot.id)
  }

  if (robotList.length < 1) {
    return <Spinner animation='border' />
  }

  return <div>
    {robotList.map(robot => <Robot key={robot.id} robot={robot} selectedRobotId={selectedRobotId} onRobotSelected={onRobotSelected} />)}
  </div>
}
