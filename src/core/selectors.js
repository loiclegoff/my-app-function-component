export const selectRobots = state => state.robotState.robots
export const selectParts = state => state.partState.parts
export const selectSelectedRobotId = state => state.robotState.selectedRobotId
const selectPartIdsFromSelectedRobot = state => {
    const selectedRobotId = selectSelectedRobotId(state)
    const robots = selectRobots(state)
    const selectedRobot = robots.find(robot => robot.id === selectedRobotId)
    
    return selectedRobot?.parts ?? []
}

export const selectPartsFromSelectedRobot = state => {
    const selectedPartIds = selectPartIdsFromSelectedRobot(state)
    const allParts = selectParts(state)

    return allParts.filter(part => selectedPartIds.includes(part.id))
}