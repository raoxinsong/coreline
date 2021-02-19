import Cookies from 'js-cookie'
const user={
	state:{
		userInfo: Cookies.get('userInfo')? JSON.parse(Cookies.get('userInfo')):'',
		token: Cookies.get('token')
	},
	getters:{
		userInfo: state => state.userInfo,
		token: state => state.token
	},
	mutations:{
		setUserInfo(state,userInfo){
			state.userInfo = userInfo
			Cookies.set('userInfo', JSON.stringify(userInfo) ,{ expires: 1 });
		},
		setToken (state, token) {
		  state.token = token
		  Cookies.set('token', token ,{ expires: 1 });
		}
	},
	actions:{
		setToken ({commit}, token) {
		  return new Promise((resolve, reject) => {
		    commit('setToken', token)
		    resolve()
		  })
		},
		setUserInfo ({commit}, user) {
		  return new Promise((resolve, reject) => {
		    commit('setUserInfo', user)
		    resolve()
		  })
		}
	}
}
export default user;