<template>
  <div id="login">
		<div class="loginCon">
		   <el-card shadow="always" class="login-module" v-if="smdl">
			 <div slot="header" class="clearfix formTitlt">
			   <span>User Login</span>
			   <span class="titIconbox">
			 </span>
			 </div>
			 <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
			   <el-form-item>
				 <el-input type="text" class='login_input' v-model="loginForm.username" auto-complete="off" placeholder="User name"></el-input>
			   </el-form-item>
			   <el-form-item>
				 <el-input type="password" class='login_input' v-model="loginForm.password" auto-complete="off"
					placeholder="Password"></el-input>
			   </el-form-item>
			   <el-form-item>
				 <el-button class="subBtn" type="primary" @click="submitForm">Login</el-button>
			   </el-form-item>
			 </el-form>
		   </el-card>
		</div>
  </div>
</template>
<script>
import md5 from 'js-md5';
import _ from 'lodash'
export default {
  data () {
    return {
      smdl: true,
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  created() {
	  var lett = this;
	  document.onkeydown = function(e) {
		  var key = window.event.keyCode;
		  if (key == 13) {
			 lett.submitForm()
		  }
	  }
  },
  methods: {
    submitForm () {
      let that = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message({
          showClose: true,
          message: 'Account cannot be empty',
          type: 'error'
        })
        return false
      } else {
        let res = that.loginUser()
		 
        res.then((data) => {
          if (data.code === 0) {
			 let userInfo = {}
			 userInfo.username = that.loginForm.username
			 userInfo.group = data.group
			 userInfo.userid = data.userid
			 userInfo.real_name = data.real_name
			 that.$store.dispatch('setUserInfo',userInfo)
             that.$store.dispatch('setToken', data.token).then((res) => {
				 if(data.group == 3){
					 that.$router.push({path: '/user'})
				 }else{
					 that.$router.push({path: '/'})
				 }
                   
             })
			  
          } else {
            that.$message({
              showClose: true,
              message: 'Account or password error',
              type: 'error'
            })
          }
        })
      }
    },
    async loginUser () {
      let params = _.cloneDeep(this.loginForm)
	  params.password =  md5(params.password)
      let resposeData = await this.axios.post('/login', params )
      return resposeData
    }
  },
  destroyed() {
  	 document.onkeydown = null
  }
}
</script>
<style lang="less">
  #login {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .loginConbox{
      background: #f5f5f5;
    }
	.loginCon {
	   width: 100%;
	   height: 100%;
	   display: flex;
	   align-items: center;
	   justify-content: center;
	  .login-module {
	    width: 400px;
	    height: 325px;
	    margin-top: 60px;
	    border: none;
	    .formTitlt {
	      font-size: 18px;
	      font-weight: 400;
	
	      .titIconbox {
	        float: right;
	
	        .pointer {
	          cursor: pointer;
	        }
	      }
	    }
	    .smalltxt {
	      text-align: right;
	
	      .a {
	        text-decoration: none;
	        color: #999999;
	        font-size: 12px;
	        margin-left: 8px;
	      }
	    }
	  }
	  .el-input__inner{
		   border-radius: 0px;
		   line-height: 40px;
		   height: 40px;
	  }
	
	  .el-form-item__content {
	    margin-left: 0px !important;
	
	    .subBtn {
	      width: 100%;
	    }
	  }
    }
  }
</style>
