import { fromJS } from 'immutable';

const initialState = fromJS({
  isShowBackTop: false,
});

const actionTypes = {
  TOGGLE_TOP_SHOW: 'APP/TOGGLE_TOP_SHOW',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set('isShowBackTop', action.isShow);
    default:
      return state;
  }
};

export const actions = {
  toggleTopShow: (isShow) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    isShow,
  }),
};
