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
