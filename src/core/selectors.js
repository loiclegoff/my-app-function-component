const selectSelectedRobot = state => state.robots.find(robot => robot.id === state.selectedRobotId)
export const selectSelectedParts = state => {
    const selectRobot = selectSelectedRobot(state)
    const selectedPartIds = selectRobot?.parts ?? []
    return state.parts.filter(part => selectedPartIds.includes(part.id))
}