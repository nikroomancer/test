import axios from 'axios';
export const FETCH_LIST = 'FETCH_USER';
export const TOGGLE_FILTER_ACTIVE = 'TOGGLE_FILTER_ACTIVE';
export const SET_PANEL_MAX_HEIGHT = 'SET_PANEL_MAX_HEIGHT';
export const SET_SELECTED_PRICE = 'SET_SELECTED_PRICE';
export const TOGGLE_SALON_TAB = 'TOGGLE_SALON_TAB';

export const fetchList = history => async dispatch => {
  const fromRoute = new RegExp(history);
  const res = await axios.get('/api/list');
  dispatch({ type: FETCH_LIST, payload: res.data });
  /*
    test to see if reloaded from salon page, if so, then get the list as it is not in the state yet.
    Using history instead of a string is more consistent if the site is big and this function gets called multiple times.
  */
  if (fromRoute.test('salon')) {
    dispatch(toggleSalonTab('info'));
  }
};

export const toggleFilterActive = () => dispatch => {
  dispatch({ type: TOGGLE_FILTER_ACTIVE });
};

export const setPanelMaxHeight = height => dispatch => {
  dispatch({ type: SET_PANEL_MAX_HEIGHT, payload: height });
};

export const setSelectedPrice = price => dispatch => {
  dispatch({ type: SET_SELECTED_PRICE, payload: price });
};

export const toggleSalonTab = choice => async dispatch => {
  dispatch({ type: TOGGLE_SALON_TAB, payload: choice });
};
