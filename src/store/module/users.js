const state={
    currentUser:null,  //显示姓名
}
const getters={
    currentUse :state =>state.currentUser 
}
const mutations={
    //更改用户信息
userStatus(state,user){
    if(user){
        state.currentUser=user
        state.isLogin=true
    }else{
        state.currentUser=null
        state.isLogin=false
    }
}
}
 const actions ={
     setUser({commit},user){
        commit('userStatus',user)
              
    }
 }
  export default{
      state,
      getters,
      mutations,
      actions
  }