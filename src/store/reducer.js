const defaultState = {
  focused:false,
}
//純函數
export default (state=defaultState,action) => {
  switch (action.type) {
    case 'searchFocus':{
      return {
        focused:true,
      }
    }
    case 'searchBlur':{
      return {
        focused:false,
      }
    }
  }
  return state;
}