// interface State {
//     robots: Robot[],
//     selectedRobotId: string
// }

const initialState = {
    robots: [],
    selectedRobotId: undefined,
    parts: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_ROBOT':
            return {
              ...state,
              // same thing: 
              // robots: state.robots
              // selectedRobotId: state.selectedRobotId
              selectedRobotId: action.payload
            };
        case 'UPDATE_ROBOTS':
            return {
                ...state,
                robots: action.payload
            }
        case 'UPDATE_PARTS':
            return {
                ...state,
                parts: action.payload
            }
    default:
      return state;
    }
}