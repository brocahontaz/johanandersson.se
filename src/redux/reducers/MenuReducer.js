import { TOGGLE_MENU } from '../actions/actionTypes'

const initialState = {
  open: true
}

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      console.log('toggle')
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