<template>
  <div class="page-header">
    <div class="page-head">
	  <div class="page-logo">{{config.webTitle}}</div>
      <div class="username" v-show="login">
		  <span class="el-dropdown-link">
		    {{userInfo.real_name}}
		  </span>
		  <el-button type="text" @click="handleCommand('logout')">Logout </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store';
import Cookies from 'js-cookie'
import config from "@/config/web.config.js";
export default {
  data() {
    return {
      searchData: '',
	  config:config.CONFIG
    }
  },
  props: {
    theme: {
      type: String,
      default: 'light',
    }
  },
  computed: {
     login(){
		 if(this.$store.getters.token){
		 	return true
		 }else{
		 	return false
		 }
	 },
	 userInfo(){
		 if(this.$store.state.user.userInfo !=''){
			  return  this.$store.state.user.userInfo
		 }else{
			 return {}
		 }
	 }
  },
  created(){
  },
  mounted() {
    //this.userInfo = this.$store.state.user.userInfo
  },
  beforeDestroy(){},
  methods: {
	async loginUserOut () {
	  let resposeData = await this.axios.get('/logout', {})
	  return resposeData.data
	},
    handleCommand(command){
      switch(command){
        case 'logout':
			this.$confirm('Are you sure to logout?', '', {
			  confirmButtonText: 'Sure',
			  cancelButtonText: 'Cancel',
			  type: 'warning'
			}).then(() => {
				let res = this.loginUserOut()
				res.then((data) => {
				   location.reload()
				   Cookies.remove('token')
				   Cookies.remove('userInfo')
				})	 
			}).catch(() => {
			   
			})
           break;
      }
    },
    
  },
};
</script>

<style lang="less">

.page-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  background-color: #24294b;
  z-index: 2999;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.09);
  .page-head{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
	  .page-logo{
		  color: #fff;
		  font-size: 22px;
		  margin-left: 50px;
	  }
  }
  
  ::-webkit-input-placeholder {
    color: #6A6E8A !important;
  }

  .username{
    margin-right: 30px;
    .el-dropdown {
      color: #9a9eae;
    }
	.el-dropdown-link{
		color:#9a9eae;
		padding-right: 10px;
	}
  }
   
   
}
 
</style>
