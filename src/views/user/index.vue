<template>
	<body-con>  
	 <div style="text-align: right;color: #24294B;padding: 5px; font-size: 12px;">
	 	<el-button size='mini' @click="goToconfig">Edit configuration</el-button>
	 </div>
	 <div class="tablebox">
		 <el-table
			 class="monitor-list"
			 ref="monitorList"
			 :data="reportInfo"
			 @sort-change="tableSort" 
			 v-loading="loading"
			 element-loading-text="Waiting..."
			 stripe
			 border 
			 empty-text="no data"  
			 @cell-mouse-enter="moserOver" 
			 @cell-mouse-leave="hideTdOperate" 
		 >
		 <el-table-column  v-if="column.isshow !==false " v-for="column in columns"
		   :key="column.prop"
		   :prop="column.prop"
		   :label="column.label"
		   :width="column.width"
		   :sortable="true" 
		   :fixed="column.fixed"    
		   >
		     <template slot-scope="scope">
		       <span v-if="column.prop == 'operate'" class="monitor-list-operate-button-bar">
				   <i class="el-icon-edit" @click="editDataDialog(scope.row)"></i>
		           <!-- <el-button type="primary" class="data-edit" icon="el-icon-edit" @click="editDataDialog(scope.row)" size="mini"></el-button> -->
		       </span>
		       <span v-else class="monitor-list-common-text" v-text="getColumnText(scope.row,column)"></span>
		     </template>
		   </el-table-column>
		 </el-table>
		 <div class="adddata">
			 <el-button size='mini' v-if="isSeniorUser" @click="addDataDialog">Add user</el-button>
		 </div>
		 <div class="icon-list" ref="editicon"  v-show="showTdOperate" >
		 			 <i class="el-icon-edit" @click="editDataDialog()"></i>
		 </div>
		 <div class="pagination" >
				 <el-pagination
				   @size-change="handleSizeChange"
				   @current-change="handleCurrentChange"
				   :current-page="currentPage"
				   :page-size="pageSize"
				    layout="prev, pager, next" 
				   :total="total">
				 </el-pagination>
		 </div>
		 <div class="dialogbox">
		 		<el-dialog
		 		  :title="dialogTitle"
		 		  :visible.sync="dialogVisible" :close-on-click-modal="false"
		 		  width="60%">
		 		  <div>
					 <el-row :gutter="10">
						 <el-col :span="18"> 
							<el-form v-loading="dataLoaing" :model='dataForm' ref="ruleForm"
							  element-loading-text="Waiting..."
							  element-loading-spinner="el-icon-loading"
							  :rules="rule" label-width="140px" class="user-ruleForm" style="width:95%" >
							  <el-form-item :label="column.label" v-for="(column,index) in editColum" :key="index" :prop='column.prop'>
								<el-input  v-if="column.type=='password'" type="password" v-model="dataForm[column.prop]"></el-input>
								<el-select v-else-if="column.type=='select'" 
								 v-model="dataForm[column.prop]" placeholder="Choose...">
								    <el-option
								      v-for="item in column.selectOption" 
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
								<el-input  v-else  v-model="dataForm[column.prop]"></el-input>
							  </el-form-item> 
							</el-form>
						 </el-col> 
						 <el-col :span="6" style="padding-top: 10px;">
							<div class="dialogopreate"> 
								 <div class="dialog_top">
									 <el-button class="btn-width" size="mini"  @click="onSubmit('ruleForm')" >Save</el-button>
									 <br>
									 <el-button size="mini" class="btn-width" @click="dialogVisible = false" > Cancel</el-button>
								 </div>
								 <div class="dialog_botom" v-show="!isAdd">
									  <el-button class="btn-width" size="mini" @click="delDataDialog">Delete user</el-button>
								 </div>
							 </div>
						 </el-col>
					 </el-row>
		 		  </div>
		 		</el-dialog>
		 </div>
	 </div>
	</body-con>
</template>
<script>
import bodyCon from '../common/bodyCon.vue'
import { baseColumn,dataColumn } from './config.js'
import md5 from 'js-md5';
import _ from 'lodash'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
	  sort: '',
	  order: '',
	  reportInfo: [],
	  total: 0, // 总条数
	  pageSize: 10, // 每页数量
	  currentPage: 1, // 当前页
      columns: [],
	  loading:true,
	  dialogVisible: false,
	  dialogTitle:'',
	  dataForm:{},
	  dataLoaing:false,
	  isAdd:true,
	  showTdOperate:false,
	  hideTdOperateTimer:'',
	  curentRow:{}
    }
  },
  components:{
  	bodyCon
  },
  computed:{
		
		editColum(){
			let tmp  =  this.columns.filter((item)=>{
				  return item.prop !='operate'
			})
			console.log('tmp',tmp)
			return tmp
		},
		isSeniorUser(){
			return true
		},
		isAdminUser(){
			if(this.$store.getters.userInfo.group === 3 ){
				return true
			}else{
				return false
			}
		},
		rule () {
			 let tmp  =  this.columns.filter((item)=>{
			 	  return item.prop !='operate'
			 })
			 let obj = {}
			 tmp.forEach((item)=>{
				 if(item.prop !='password' && item.prop !='reentry_password' ){
					 obj[item.prop]  = []
					 let verify  = { required: true, message: '', trigger: 'blur' }
					 verify.message =   `${item.label } cannot be empty`
					 
					 let mail =  { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
					 if(item.prop ==='email_address'){
						 obj[item.prop].push( mail)
					 }
					 obj[item.prop].push( verify)
				 }
			 })
			 return obj
		}
  },
  watch:{
	  search: {
	      handler(newName, oldName) {
	          this.getList()
	      },
	      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
	      deep: true
	 }
  },
  created() {
	this.loading = true
  	let  res  = this.getConifg()
	this.getList()
	this.loading = false
  },
  methods: {
	  goToconfig(){
		  this.$router.push({ path: '/config'})
	  },
	  hideTdOperate (){
	    this.hideTdOperateTimer = setTimeout(()=>{
	       this.showTdOperate = false
	    }, 400)
	  },
	  moserOver(row, column, cell, event){
	  	clearTimeout(this.hideTdOperateTimer)
	  	this.showTdOperate = true
	  	this.curentRow = row
		let Element = ((window.event)?(event.srcElement):(event.currentTarget));
	  	let curenTop =  Element.parentElement.offsetTop
	  	this.$refs.editicon.style.top =  ( curenTop + 24 )	+  'px'
	  },
	getColumnText(row,column){
		if(column.type =="select" &&  column.selectOption.length > 0 ){
			 let curentMap =  column.selectOption.find((item)=>{
				  return  item.value == row[column.prop]
			 })
			 if(curentMap){
				 return curentMap.label
			 }else{
				 return row[column.prop] 
			 }
			  
		}else{
			 return row[column.prop] 
		}
	},
    getConifg() {
	  this.columns = null
	  let tmp = _.cloneDeep(baseColumn)
	  // let oneOpreate  = []
	  // oneOpreate.prop = 'operate'
	  // oneOpreate.label = 'operate'
	  // oneOpreate.width = '80'
	  // tmp.push(oneOpreate)
	  this.columns = []
	  this.columns  = tmp
	  return true
    },
	tableSort (config) {
	  let order
	  switch (config.order) {
	    case 'ascending':
	      order = 'asc'
	      break
	    case 'descending':
	      order = 'desc'
	      break
	    default:
	      order = ''
	  }
	  this.sort = config.prop || ''
	  this.order = order
	  this.getList()
	},
	handleSizeChange (val) {
	  // 自定义处理显示分页数量
	  this.pageSize = val
	  this.getList()
	},
	handleCurrentChange (currentPage) {
	  this.$router.push({ path: this.pagePath, query: { page: currentPage } })
	  this.currentPage = currentPage
	  this.getList()
	},
	async getList () {
		this.loading = true
	  const params = {
	    size: this.pageSize,
	    page: this.currentPage,
	    order: this.order,
	    sort: this.sort,
	  }
	  let resposeData = await this.axios.post('/get_all_users', params)
	  this.reportInfo = resposeData.list
	  this.loading  = false
	  this.total =  resposeData.count;
	},
	addDataDialog () {
	  this.isAdd = true
	  this.dialogTitle = 'Add user'
	  this.dialogVisible = true
	  this.dataForm  = {}
	},
	delDataDialog () {
	  let _this = this
	  this.$confirm('Do you confirm to delete this user?', 'tips', {
	    confirmButtonText: 'Delete',
	    cancelButtonText: 'Cancel',
	    type: 'warning'
	  }).then(() => {
			let res = this.delUser()
			res.then((redata)=>{
				this.dialogVisible = false
				setTimeout(()=>{
					_this.getList()
				})
				if(this.$store.state.user.userInfo.username == this.curentRow.username ){
					 Cookies.remove('token')
					location.reload()
				}  
			})
	  }).catch(() => {
	    // _this.loading = false
	    // this.$message({
	    //   type: 'info',
	    //   message: '已取消'
	    // })
	  })
	},
	async delUser(){
	   let that  = this
	   let id = this.dataForm.id
	   let resposeData = await this.axios.post('/delete_user', 
			{
			  id: id
		   }
		)
		if(resposeData.code ===0){
			this.$message({
			   message: resposeData.msg,
			   type: 'success'
			 });
		}else{
			this.$message.error(resposeData.msg)
		}
		return true
	},
	editDataDialog (row) {
	  this.isAdd = false
	  this.dialogTitle = 'Edit user'
	  this.dataForm = {}
	  for(var i in this.curentRow){
		   this.$set(this.dataForm,i,this.curentRow[i])
	  }
	  this.dialogVisible = true
	},
	resetForm (formName) {
	  this.$refs[formName].resetFields()
	},
	onSubmit (formName) {
	  if(this.dataForm.password!='' &&  this.dataForm.password !== this.dataForm.reentry_password ){
		  this.$message.error('Two passwords must be consistent')
		  return false
	  } 
	  let _this = this
	  this.$refs[formName].validate((valid) => {
	     if (valid) {
	        let res = _this.creteUser()
	     	res.then((redata)=>{
				if(redata){
					this.dialogVisible = false
					setTimeout(()=>{
						_this.getList()
					})
				}
	     	})
	         
	     } else {
	       this.$message.error('Data verification failed ')
	       return false
	     }
	  })
	},
	async creteUser(){
	    const params = _.cloneDeep(this.dataForm)     
	    let id = params.id
		if(params.reentry_password  && params.reentry_password !=''){
			params.reentry_password = md5(params.reentry_password)
		}
		if(params.password && params.password !=''){
			params.password = md5(params.password)
		}
	    delete params.id
	    let that  = this
		console.log('params',params)
		let resposeData = await this.axios.post('/operate_user', 
			{
			  update_info:JSON.stringify(params),
			  id: id
		   }
		)
		if(resposeData.code ===0){
			this.$message({
			   message: resposeData.msg,
			   type: 'success'
			 });
			 return true
		}else{
			this.$message.error(resposeData.msg)
			return false
		}
		 
	},
  }
}
</script>
<style lang="less">
	.tablebox{
		position: relative;
		.adddata{
			 margin-top: 5px;
			 margin-bottom: 5px;
		}
		.data-edit{
			padding: 5px 10px;
		}
		.icon-list{
			position: absolute;
			top:40px;
			right: 0px;
			cursor: pointer;
		}
		.dialogopreate{
			 flex-direction: column;
			 .dialog_top{
				 // .el-button+.el-button{
					//  margin-left: 0px !important;
				 // }
				 display: flex;
				 flex-direction: column;
				 flex: 1;
				 margin-bottom: 50px;
				  
			 }
			 .btn-width{
				  width: 100px;
				  margin-bottom: 10px;
			 }
		}
		.pagination{
		  text-align:right;
		  position: relative;
		  .batchBox{
		    position:absolute;
		    top:20px;
		    left: 5px;
		    text-align: left;
		  }
		}
		.user-ruleForm{
			.el-form-item{
				 margin-bottom: 20px;
			}
		}
	}
</style>
