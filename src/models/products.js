import dva from 'dva';

export default {
  namespace:'products',
  state:[],
  reducers:{
    'delete'(state,{papload:id}){
      return state.filter(item=>item.id!==id);
    }
  }
}
