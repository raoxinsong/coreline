<template>
	 <div class="tablebox">
		 <el-table
			 class="monitor-list"
			 ref="monitorList"
			 :data="reportInfo"
			 @sort-change="tableSort" 
			 v-loading="loading"
			 element-loading-text="loading..."
			 stripe
			 border 
			 empty-text="No data" 
			 @cell-mouse-enter="moserOver" 
			 @cell-mouse-leave="hideTdOperate" 
			 tooltip-effect="light"
		 >
		 <el-table-column v-for="column in columns"  v-if="column.isshow ==1 " :show-overflow-tooltip="true" 
		   :key="column.prop"
		   :prop="column.prop"
		   :label="column.label"
		   :width="column.width"
		   :sortable="true"
		   :fixed="column.fixed"    
		   >
		     <template slot-scope="scope">
				  <!-- <el-tooltip class="item" v-if="getIsShow(scope.row,column)" effect="light" :content=" getColumnText(scope.row,column,1)" placement="top">
					<span v-text="getColumnText(scope.row,column)" ></span>
				  </el-tooltip> -->
			      <span class="monitor-list-common-text" v-text="getColumnText(scope.row,column)" ></span>
		     </template>
		   </el-table-column>
		 </el-table>
		 <div class="adddata">
			 <el-button size='mini' v-if="isSeniorUser" @click="addDataDialog">Insert data</el-button>
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
			  width="70%">
			  <div>
				 <el-row :gutter="10">
					 <el-col :span="18"> 
						<el-form v-loading="dataLoaing" :model='dataForm' ref="ruleForm"
						  element-loading-text="please waiting..."
						  element-loading-spinner="el-icon-loading"
						  :rules="rule" label-width="90px" class="data-ruleForm" style="width:95%" >
						  <el-form-item :label="column.label" v-for="(column,index) in editColum" v-if="column.isshow ==1 " :key="index" :prop='column.prop'>			
								<el-select v-if="column.type=='select'"
								 v-model="dataForm[column.prop]" placeholder="Choose...">
								    <el-option
								      v-for="item in column.selectOption" 
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
								<el-date-picker  v-else-if="column.type ==='date' "
									v-model="dataForm[column.prop]"
									type="date"
									placeholder="Please select DATE" 
									value-format="yyyy-MM-dd"  
									:picker-options="pickerOptions"
								></el-date-picker>
								<el-input v-else :type="column.type" v-model="dataForm[column.prop]"></el-input>
						  </el-form-item> 
						</el-form>
					 </el-col> 
					 <el-col :span="6" style="padding-top: 10px;">
						<div class="dialogopreate"> 
							 <div class="dialog_top">
								 <el-button class="btn-width" size="mini"  @click="submitForm('ruleForm')" >Save</el-button>
								 <br>
								 <el-button size="mini"  class="btn-width" @click="dialogVisible = false" > Cancel</el-button>
							 </div>
							 <div class="dialog_botom" v-show="!isAdd">
								  <el-button size="mini" v-if="curentRow.is_delete ===0 " class="btn-width"   @click="delDataDialog" >Delete data</el-button>
								  <el-button size="mini" v-else class="btn-width"   @click="recolveDataDialog" >Recover data</el-button>
							 </div>					  
						 </div>
					 </el-col>
				 </el-row>
			  </div>
			</el-dialog>
		 </div>
		 <div class="icon-list" ref="editicon"  v-show="showTdOperate" >
			 <i class="el-icon-edit" @click="editDataDialog()"></i>
		 </div>
	 </div>
</template>
<script>
import _ from 'lodash'
import { baseColumn,dataColumn } from './config.js'
import { isEmpty} from '@/utils/object.js'
export default {
  data () {
    return {
	  timeOut:'',
	  sort: '',
	  order: '',
	  reportInfo: [],
	  total: 0, // 总条数
	  pageSize: 40, // 每页数量
	  currentPage: 1, // 当前页
      columns: [],
	  loading:true,
	  dialogVisible: false,
	  dialogTitle:'',
	  dataForm:{},
	  showTdOperate:false,
	  dataLoaing:false,
	  curentRow:{},
	  pickerOptions: {
	  		disabledDate(time) {
	  		  return time.getTime() > Date.now();
	  		}
	  },
	  curentTable:'',
	  opreateStyleObject: {
	    left: 0,
	    top: 0,
	  },
	  hideTdOperateTimer:'',
	  isAdd:true
    }
  },
  props: {
    type:{
  	  type:String,
  	  default:'left'
    },
    search: {
      type: Object,
      default: ()=>{
        return {}
      }
    },
	tableConfig: {
	  type: Object,
	  default: ()=>{
	    return {}
	  }
	}
  },
  computed:{
		editColum(){
			if(this.columns.length <=0){
				 return []
			}
			let tmp  =  this.columns.filter((item)=>{
				  return item.prop !='is_delete'
			})
			return tmp
		},
		rule () {
			 let obj = {}
			 if(this.columns.length <=0){
				 return obj
			 }
			 let tmp  =  this.columns.filter((item)=>{
			 	  return item.prop !='operate'
			 })
			  
			 tmp.forEach((item)=>{
				 obj[item.prop]  = []
				 let verify  = { required: true, message: '', trigger: 'blur' }
				 verify.message =   `${item.label } cannot be empty`
				 obj[item.prop].push( verify)
			 })
			 return obj
		},
		isSeniorUser(){
			if(this.$store.getters.userInfo.group === 2 ){
				return true
			}else{
				return false
			}
		},
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
	res.then((data) => {
		if(data){
			this.getList()
			 
		}
	    this.loading = false 
	})
  },
  mounted() {
  	this.autoReload();
	let _this  = this
  },
  methods: {
	getIsShow(row,column){
		return  parseInt(column.detail) == 1
	},
	getColumnText(row,column,isTostring){
		let redata = '';
		if(column.type =="select" &&  column.selectOption.length > 0 ){
			 let curentMap =  column.selectOption.find((item)=>{
				  return  item.value == row[column.prop]
			 })
			 if(curentMap){
				 redata =  curentMap.label
			 }else{
				 redata =  row[column.prop] 
			 }
		}else{
			 redata =  row[column.prop] 
		}
		if(isTostring){
			if(redata){
				return redata.toString()
			}else{
				return ''
			}
			 
		}else{
			return redata
		}
		 
	}, 
	hideTdOperate(){
	  this.hideTdOperateTimer = setTimeout(()=>{
	     this.showTdOperate = false
	  }, 400)
	},
	moserOver(row, column, cell, event){
		if(!this.isSeniorUser){
			return false
		}
		clearTimeout(this.hideTdOperateTimer)
		this.showTdOperate = true
		this.curentRow = row
		let Element = ((window.event)?(event.srcElement):(event.currentTarget));
		let curenTop =  Element.parentElement.offsetTop
		// console.log('sdfdf',event.toElement.parentElement.offsetTop)
		// console.log('jq-curenTop',$(event.toElement.parentElement).position())
		// console.log('Element.parentElement',Element.parentElement.clientWidth)
		let curentLeft  = Element.parentElement.clientWidth
		let boxWidth =  Element.parentElement.parentElement.parentElement.parentElement.clientWidth
		if(boxWidth < curentLeft){
			curentLeft = boxWidth
		}
		this.$refs.editicon.style.top =  ( curenTop + 24 )	+  'px'
		this.$refs.editicon.style.left =  ( curentLeft -20)	+  'px'
	},
	async getUserInfo () {
		let resposeData = await this.axios.get('/getuserinfo', {})
		return resposeData.data
	},
    async getConifg() {
	  let  tmp =  _.cloneDeep(this.tableConfig)
	   if(isEmpty(this.tableConfig)){
		   return false
	   }
	   this.curentTable =  tmp.table_name
	  if(tmp.table_config ){
		  tmp = JSON.parse(tmp.table_config)
	  }
	  this.columns = null
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
	async getList (status) {
	 if(status !==1){
		 this.loading = true
	 }
	  const params = {
	    size: this.pageSize,
	    page: this.currentPage,
	    order: this.order,
	    sort: this.sort,
		date:this.search.date,
		is_delete:this.search.is_delete,
		table:this.curentTable
	  }
	  let resposeData = await this.axios.post(`/showdata`, params)
	  this.reportInfo = resposeData.list
	  this.total =  resposeData.count;// parseInt(resposeData.data.count)
	  this.loading = false
	},
	addDataDialog () {
	  this.isAdd = true
	  this.dialogTitle = 'Insert data'
	  this.dialogVisible = true
	  this.dataForm  = {}
	},
	delDataDialog () {
	  let _this = this
	  this.$confirm('Do you confirm to delete this data?', '', {
	    confirmButtonText: 'Delete',
	    cancelButtonText: 'Cancel',
	    type: 'warning'
	  }).then(() => {
			let res = this.delData()
			res.then((redata)=>{
				this.dialogVisible = false
				setTimeout(()=>{
					_this.getList()
				})
			})
	  }).catch(() => {})
	},
	recolveDataDialog(){
		let _this = this
		this.$confirm('Do you confirm to recover this data?', '', {
		  confirmButtonText: 'Recover',
		  cancelButtonText: 'Cancel',
		  type: 'warning'
		}).then(() => {
					let res = this.saveData(1)
					res.then((redata)=>{
						this.dialogVisible = false
						setTimeout(()=>{
							_this.getList()
						})
					})
		}).catch(() => {})
	},
	async delData(){
	   let that  = this
	   let id = this.dataForm.id
	   let resposeData = await this.axios.post('/delete_data', 
			{
			  id: id,
			  table: that.curentTable
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
	editDataDialog () {
		this.isAdd = false
	  this.dialogTitle = 'Edit data'
	  
	  this.dataForm = {}
	  for(var i in this.curentRow){
		    
		   this.$set(this.dataForm,i,this.curentRow[i])
	  }
	  this.dialogVisible = true
	   
	
	},
	resetForm (formName) {
	  this.$refs[formName].resetFields()
	},
	autoReload() {
	  const that = this;
	  this.timeOut = window.setInterval(() => {
	    that.getList(1);
	  }, 10000);
	},
	submitForm (formName) {
		let _this  = this
	  this.$refs[formName].validate((valid) => {
	    if (valid) {
	        let res = this.saveData()
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
	async saveData(recover){
	   const params = _.cloneDeep(this.dataForm)
	   if(recover ===1){
		    params.is_delete = 0 
	   }
	   console.log('params',params)
	   let id = params.id
	   delete params.id
	   let that  = this
	   let resposeData = await this.axios.post('/operate_data', 
			{
			  update_info:JSON.stringify(params),
			  id: id,
			  table: that.curentTable
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
		 
	}
  },
  destroyed() {
    window.clearTimeout(this.timeOut);
  }
}
</script>
<style lang="less">
	.tablebox{
		position: relative;
		.el-form-item{
			margin-bottom: 20px !important;
		}
		.adddata{
			 margin-top: 5px;
			 margin-bottom: 5px;
		}
		.data-edit{
			padding: 5px 10px;
		}
		.dialogopreate{
			 flex-direction: column;
			 .dialog_top{
				 .el-button+.el-button{
					 margin-left: 0px !important;
				 }
				 display: flex;
				 flex-direction: column;
				 flex: 1;
				 margin-bottom: 50px;
				 .btn-width{
					  width: 100px;
					  margin-bottom: 10px;
				 }
			 }
			 .dialog_botom{
				 .btn-width{
				    width: 100px;
				 }
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
		.icon-list{
			position: absolute;
			top:40px;
			right: 0px;
			cursor: pointer;
		}
		.data-ruleForm{
			.el-form-item{
				 margin-bottom: 10px;
			}
		}
		.el-table{
		  display: inline-block;
		  .caret-wrapper{
		    position: absolute;
		    right: 1px;
		    top: 50%;
		    transform: translateY(-50%) scale(0.7, 1);
		  }
		  .sort-caret{
		    left: auto;
		    right: 0;
		  }
		
		  td{
		    &.overLimit{
		      background: #FFF9AB !important;
		    }
		    .cell{
		      padding: 0px 7px;
		
		      .cellWraper{
		        overflow: hidden;
		        text-overflow: ellipsis;
		        white-space: nowrap;
		
		      }
		    }
		  }
		}
	}
</style>
