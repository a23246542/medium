import api from '../api';
import { actions as writerActions } from './modules/writer';

export const actions = {
  loadWriters: () => {
    return async (dispatch) => {
      dispatch(writerActions.fetchWriterList());
      await api
        .getWriterList()
        .then((res) => {
          const result = res.data.data.writerList;
          dispatch(writerActions.fetchWriterListSuccess(result));
        })
        .catch((err) => {
          dispatch(writerActions.fetchWriterListFail(err));
        })
        .finally(() => {
          dispatch(writerActions.fetchWriterListRequested());
        });
    };
  },
};
