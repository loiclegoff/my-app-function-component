import { Spinner } from 'react-bootstrap'

export function RobotList(props){
  if (props.robotList.length < 1) {
    return <Spinner animation='border' />
  }

  return <div>{JSON.stringify(props.robotList[0])}</div>
}
