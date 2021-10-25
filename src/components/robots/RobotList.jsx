import { useState } from "react"
import { useData } from "../../hooks/useData"
import { Robot } from "./Robot"

export const RobotList = (props) => {
    const robots = useData('https://pure-temple-56604.herokuapp.com/robots')
    const [selectedRobotId, setSelectedRobotId] = useState(undefined)

    const handleOnClick = (idRobot) => {
        setSelectedRobotId(idRobot)
        const robot = robots.find(r => r.id === idRobot)
        const partIds = robot?.parts ?? []
        props.setSelectedPartIds(partIds)
    }

    return robots.map(robot =>
        <Robot
            key={robot.id}
            robot={robot}
            handleOnClick={handleOnClick}
            selectedRobotId={selectedRobotId}
        /> 
    )
} 