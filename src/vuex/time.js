const time={
  state:{
    startDate:'',
    endDate: '',
  },
  getters:{
    getStartDate(state){
      return state.startDate;
    },
    getEndDate(state){
      return state.endDate;
    }
  },
  mutations:{
    setStartDate(state,startDate){
      state.startDate=startDate;
    },
    setEndDate(state,endDate){
      state.endDate=endDate;
    }
  },
  actions:{
    setStartDate({commit},startDate){
      commit('setStartDate',startDate);
    },
    setEndDate({commit},endDate){
      commit('setEndDate',endDate);
    }
  }
}
export default time;