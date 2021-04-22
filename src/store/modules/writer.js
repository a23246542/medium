import { fromJS } from 'immutable';
import api from '../../api';

const initialState = fromJS({
  writerList: [],
});

const actionTypes = {
  FETCH_WRITER_LIST: 'WRITER/FETCH_WRITER_LIST',
};

const fetchWriterList = (writerAry) => ({
  type: actionTypes.FETCH_WRITER_LIST,
  writerList: fromJS(writerAry),
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WRITER_LIST:
      return state.set('writerList', action.writerList);
    default:
      return state;
  }
};

// export const loadWriters = () => {
//   return async (dispatch) => {
//     await api.getWriterList().then((res) => {
//       const result = res.data.data.writerList;
//       dispatch(fetchWriterList(result));
//     });
//   };
// };
export const actions = {
  loadWriters: () => {
    return async (dispatch) => {
      await api.getWriterList().then((res) => {
        const result = res.data.data.writerList;
        dispatch(fetchWriterList(result));
      });
    };
  },
};
