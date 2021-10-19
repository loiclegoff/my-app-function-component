import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'
import { Robot } from './robot/Robot'

export function RobotList(props) {
  const [robotList, setRobotList] = useState([])
  const [selectedRobotId, setSelectedRobotId] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/robots')
      const robotList = await resp.json()
      setRobotList(robotList)
    }
    fetchData()
  }, [])

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
