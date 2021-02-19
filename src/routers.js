// const Home = resolve => {
//   require.ensure(['./views/loading.vue'], () => {
//     resolve(require('./views/loading.vue'))
//   })
// }
const routers = [
	{
	  path: '/',
	  name: 'default',
	  component (resolve) {
	    require.ensure(['./views/home/index.vue'], () => {
	      resolve(require('./views/home/index.vue'))
	    })
	  }
	},{
	  path: '/map',
	  name: 'map',
	  component (resolve) {
		require.ensure(['./views/map/index.vue'], () => {
		  resolve(require('./views/map/index.vue'))
		})
	  }
	},{
	  path: '/login',
	  name: 'loginpage',
	  component (resolve) {
		require.ensure(['./views/login/index.vue'], () => {
		  resolve(require('./views/login/index.vue'))
		})
	  }
	},{
	  path: '/user',
	  name: 'userpage',
	  component (resolve) {
		require.ensure(['./views/user/index.vue'], () => {
		  resolve(require('./views/user/index.vue'))
		})
	  }
	},{
	  path: '/config',
	  name: 'configPage',
	  component (resolve) {
		require.ensure(['./views/tableConfig/index.vue'], () => {
		  resolve(require('./views/tableConfig/index.vue'))
		})
	  }
	} , {
	  path: '/noauth',
	  name: 'noauthpage',
	  component (resolve) {
		require.ensure(['./views/noauth/index.vue'], () => {
		  resolve(require('./views/noauth/index.vue'))
		})
	  }
	}, {
	  path: '/404',
	  name: '404page',
	  component (resolve) {
		require.ensure(['./page404.vue'], () => {
		  resolve(require('./page404.vue'))
		})
	  }
	}     
]
export default routers
