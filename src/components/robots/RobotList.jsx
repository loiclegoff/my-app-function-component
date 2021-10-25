import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setSelectedRobotId, updateRobots } from "../../core/actions"
import { useData } from "../../hooks/useData"
import { Robot } from "./Robot"

export const RobotList = (props) => {
    useData('https://pure-temple-56604.herokuapp.com/robots', updateRobots)
    const robots = useSelector(state => state.robots)
    const dispatch = useDispatch()
    
    const handleOnClick = (idRobot) => {
        dispatch(setSelectedRobotId(idRobot))
        const robot = robots.find(r => r.id === idRobot)
        const partIds = robot?.parts ?? []
        props.setSelectedPartIds(partIds)
    }

    return robots.map(robot =>
        <Robot
            key={robot.id}
            robot={robot}
            handleOnClick={handleOnClick}
        /> 
    )
} 