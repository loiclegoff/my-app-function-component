export const setSelectedRobotId = (id) => ({
    type: 'UPDATE_SELECTED_ROBOT',
    payload: id
})

export const updateRobots = (robots) => ({
    type: 'UPDATE_ROBOTS',
    payload: robots
})

export const updateParts = (parts) => ({
    type: 'UPDATE_PARTS',
    payload: parts
})