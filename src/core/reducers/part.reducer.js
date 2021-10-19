import { UPDATE_SELECTED_PART, UPDATE_PARTS, UPDATE_SELECTED_ROBOT } from '../actions'

const initialState = {
  parts: [],
  selectedPartId: undefined,
}

/**
 * Reducer
 */
const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARTS:
      return {
        ...state,
        parts: action.parts,
      }
    case UPDATE_SELECTED_PART:
      return {
        ...state,
        selectedPartId: action.partId,
      }
      case UPDATE_SELECTED_ROBOT:
        return {
          ...state,
          selectedPartId: undefined,
        }
    default:
      return state
  }
}

export default partReducer
