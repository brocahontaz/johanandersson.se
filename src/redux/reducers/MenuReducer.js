import { TOGGLE_MENU } from '../actions/actionTypes'

const initialState = {
  open: false
}

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        open: !state.open
      }
    }
    default:
      return state
  }
}

export default MenuReducer