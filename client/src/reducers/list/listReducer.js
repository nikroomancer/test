import {
  FETCH_LIST,
  TOGGLE_FILTER_ACTIVE,
  SET_PANEL_MAX_HEIGHT,
  SET_SELECTED_PRICE,
  TOGGLE_SALON_TAB
} from './listActions';
import { PRICE_RANGE_0 } from '../../components/List/Filter/constants';

const initialState = {
  salons: null,
  filterActive: false,
  panelMaxHeight: 0,
  selectedPrice: PRICE_RANGE_0,
  salonTab: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        salons: action.payload || null
      };
    case TOGGLE_FILTER_ACTIVE:
      return {
        ...state,
        filterActive: !state.filterActive
      };
    case SET_PANEL_MAX_HEIGHT:
      return {
        ...state,
        panelMaxHeight: action.payload
      };
    case SET_SELECTED_PRICE:
      return {
        ...state,
        selectedPrice: action.payload,
        filterActive: !state.filterActive
      };
    case TOGGLE_SALON_TAB:
      return {
        ...state,
        salonTab: action.payload
      };
    default:
      return state;
  }
}
