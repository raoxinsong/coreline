<template>
	 <div class="configbox">
		 <div class="add-form">
		 <el-form :model="ruleForm" 
		    v-loading="loading"  
		    element-loading-text="Waiting..."
		    element-loading-spinner="el-icon-loading"
		   ref="ruleForm" label-width="100px" class="config-ruleForm" style="width:90%">

		   <el-form-item label="Tablename" prop="title">
		     <el-input v-model="ruleForm.table_name" disabled></el-input>
		   </el-form-item>
		   <div class="groupbox">
		       <div class="contbody"  v-for="(item,index) in ruleForm.table_config" :key="index">
		          <el-form class="demo-form-inline"  label-width="100px" >
				  <el-form-item label="Key">
				    <el-input v-model="ruleForm.table_config[index].prop" :disabled="!ruleForm.table_config[index].isadd" class="name_map" placeholder="Field key "></el-input>
				  </el-form-item>
				  <el-form-item label="Name">
					<el-input v-model="ruleForm.table_config[index].label" class="name_map" placeholder="field name "></el-input>
				  </el-form-item>
				  <el-form-item label="Edit box type">
					<el-select v-model="ruleForm.table_config[index].type" @change="changeType(item,$event)" placeholder="Choose...">
						<el-option
						  v-for="item in selectType"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					  </el-select>
				  </el-form-item>
				  <el-form-item label="Select options" v-show="ruleForm.table_config[index].type =='select'">
						 <el-button type="primary" @click="addoption(item)" icon="el-icon-plus" size='mini' circle></el-button>
						 <div class="dfdfdfd"  v-for="(selectitem,selectindex) in selectOption[item.prop]" :key="selectindex">
							   key:<input  type="text" v-model="selectitem.value" placeholder="Mysql field">
							   name:<input  type="text"  v-model="selectitem.label" placeholder="Web show name">
							   <div class="closeBox el-icon-error" @click='closeOption(item,selectindex)' ></div>
						 </div>
				  </el-form-item>
				  <el-form-item label="Field width">
				  		<el-input v-model="ruleForm.table_config[index].width" class="name_map" placeholder="Field width(px)"></el-input>
				  </el-form-item>
				  <!-- <el-form-item label="Show tootips">
				  		<el-switch v-model="ruleForm.table_config[index].detail" active-value="1" inactive-value="0"></el-switch>
				  </el-form-item> -->
		   		  <el-form-item label="Visible">
		   		   <el-switch v-model="ruleForm.table_config[index].isshow" active-value="1" inactive-value="0"></el-switch>
		   		  </el-form-item>
				  <el-form-item label="Field type" v-if="ruleForm.table_config[index].isadd">
					<el-select v-model="ruleForm.table_config[index].field_type" placeholder="Field type">
						<el-option
						  v-for="item in fieldType"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					</el-select>
				  </el-form-item>
				  <el-form-item label="Field length" v-if="ruleForm.table_config[index].isadd">
				   <el-input v-model="ruleForm.table_config[index].field_length" class="name_map" 
					:disabled="getDisable(index)" 
				   placeholder="Field length"></el-input>
				  </el-form-item>
				  <el-form-item label="Default value" v-if="ruleForm.table_config[index].isadd">
				   <el-input v-model="ruleForm.table_config[index].default_value" class="name_map" placeholder="Default value"></el-input>
				  </el-form-item>
		         </el-form>
				 <div class="closeBox el-icon-error" @click='closeContent(index)' v-if="ruleForm.table_config[index].isadd" ></div>
		       </div>
		   </div> 
		   <el-form-item label="Add field">
		     <el-button type="primary" @click="addContent()" icon="el-icon-plus" size='mini' circle></el-button>
		   </el-form-item>
		   <div class="box" style="text-align: right;">
			   <el-button type="primary" size="mini" @click="submitForm('ruleForm')">Save</el-button>
		   </div>
		 </el-form>
		 </div>
	 </div>
</template>
<script>
import _ from 'lodash'
import { selectType,fieldType } from './config.js'
import { isEmpty} from '@/utils/object.js'
export default {
  data () {
    return {
	  loading:false,
	  selectType:selectType,
	  fieldType:fieldType,
	  ruleForm:{
		   tablename:'',
		   table_config:[]
	  },
	  selectOption:{
		  
	  },
	  curentConfig:{}
    }
  },
  props: {
	tablename:{
		type:String,
		default:'datainfo_a'
	},
	pagePath:{
	  type:String,
	  default:'/index'
	},
    search: {
      type: Object,
      default: ()=>{
        return {}
      }
    },
	tableColumn: {
	  type: Object,
	  default: ()=>{
	    return {}
	  }
	}
  },
  computed:{
		rule () {
			 let tmp  =  this.columns.filter((item)=>{
			 	  return item.prop !='operate'
			 })
			 let obj = {}
			 tmp.forEach((item)=>{
				 obj[item.prop]  = []
				 let verify  = { required: true, message: '', trigger: 'blur' }
				 verify.message =   `${item.label } cannot be empty`
				 obj[item.prop].push( verify)
			 })
			 return obj
		}
  },
  created() {
  	 this.getConifg()
  },
  methods: {
	getDisable(index){
		if(this.ruleForm.table_config[index].field_type !='int' && this.ruleForm.table_config[index].field_type !='varchar'){
			return true;
		}else{
			return false;
		}
	},
	addoption(item){
		let one ={};
		one.label = '';
		one.value = '';
		if(!this.selectOption[item.prop]){
			this.$set(this.selectOption,item.prop,[])
		}
		this.selectOption[item.prop].push(one);
	},
	addContent(){
	  let one ={};
	  one.prop = '';
	  one.label = '';
	  one.type ='';
	  one.isshow = 1;
	  one.isadd = 1;
	  this.ruleForm.table_config.push(one);
	},
	changeType(row,val){
		// let tmp  =  _.cloneDeep(row.selectOption)
		// if( _.isArray(tmp)){
		//    let abc =  tmp.map( (item)=>{ 
		// 		console.log('item',item)
		//         return  `${item.value}:${item.label}`
		//     })
		// 	//this.searchOption[row.prop] = ''
		// 	this.$set(this.searchOption,row.prop,abc.join("\n"))
		// } 
		// console.log('searchOption',this.searchOption)
	},
	closeContent(index){
	  this.ruleForm.table_config.splice(
	  this.ruleForm.table_config.findIndex( (v,itemindex) => itemindex === index),1);
	},
	closeOption(item,index){
		this.selectOption[item.prop].splice(
		this.selectOption[item.prop].findIndex( (v,itemindex) => itemindex === index),1);
	},
	splitSelectValue(val){
		
	},
    getConifg() {
		this.loading = true
	 //    let resposeData = await this.axios.get('/get_table_config', {})
		// let tmp  =  resposeData.list
		// let _this = this
		// let curent = resposeData.list.find((item)=>{
		// 	return item.table_name == _this.tablename 
		// })
		let curent = this.tableColumn
        this.ruleForm = _.cloneDeep(curent)
		if(this.ruleForm.table_config){
			this.$set(this.ruleForm,'table_config', JSON.parse(this.ruleForm.table_config))
		}
		if(this.ruleForm.table_config && this.ruleForm.table_config.length > 0 ){
			this.ruleForm.table_config.forEach((item)=>{
				if(item.type =='select'){
					 this.$set(this.selectOption,item.prop, item.selectOption)
				}
			})
		}
		this.loading  = false
	  return true
    },
	resetForm (formName) {
	  this.$refs[formName].resetFields()
	},
	submitForm (formName) {
		let _this  = this
	  this.$refs[formName].validate((valid) => {
	    if (valid) {
	        let res = this.saveData()
			res.then((redata)=>{
				this.dialogVisible = false
				 
			})
	    } else {
	      this.$message.error('Data verification failed ')
	      return false
	    }
	  })
	},
	async saveData(){
	   const params = _.cloneDeep(this.ruleForm)
	   let _this = this
	   let tmparr = []
	   let flag  = 0 
	   let flagKey = ''
	   let tmpobj  = {}
	   let nameFlag = 0 
	   let flagNamekey = ''
	   params.table_config.forEach((item,index)=>{
		   
		   if( item.type =='select'){
			   if(_this.selectOption[item.prop].length >0){
				   
				  _this.selectOption[item.prop].forEach((subitem,index)=>{
					  if(subitem.value ==='' ||  subitem.value == null ){
						  flag = 1
						  flagKey = item.prop
					  }
					   if(!isNaN(subitem.value) && subitem.value !='' &&  subitem.value !=null   ){
						   subitem.value =  parseInt(subitem.value)
					   }
				  })
				   
			      this.$set( params.table_config[index],'selectOption',_this.selectOption[item.prop])
			   }
		   }
		   if(item.prop !==''){
			    tmparr.push(params.table_config[index])
		   }
		   if(item.label ==''){
			   nameFlag = 1
			   flagNamekey = item.prop
		   }
		   if(item.isadd  ===1){
			   console.log('item',item)
			    tmpobj = item
		   }
	   })
	   if(nameFlag > 0 ){
	   		  this.$message.error(`${flagNamekey} name  cannot be empty`)
	   		  return false
	   }
	   if(flag > 0 ){
		  this.$message.error(`${flagKey} select option key  cannot be empty`)
		  return false
	   }
	   //验证数据字段
	   if(!isEmpty(tmpobj)){
		   if(tmpobj.field_type =='int' || tmpobj.field_type !='varchar' || tmpobj.field_type ==''){
			   console.log('tmpobj',tmpobj)
			   if(!tmpobj.field_length ){
				    if(tmpobj.prop ===''){
						this.$message.error(`Filed length is empty`)
					}else{
						this.$message.error(`${tmpobj.prop} filed length  cannot be empty`)
					}
					 
					return false
			   }
		   }
	   }
	   let id = params.id
	   delete params.id
	   params.table_config  = _.cloneDeep(tmparr)
	   
	   let that  = this
	   let resposeData = await this.axios.post('/add_column_with_config', 
			{
			  table_config:JSON.stringify(params.table_config),
			  table_name: params.table_name
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
	}
  }
}
</script>
<style>
	body .el-table th.gutter{
	  display: table-cell!important;
	}
</style>
<style lang="less">
	.configbox{
		 .name_map{
			 width: 200px;
		 }
		 .groupbox{
		    margin-bottom:10px;
		    .contbody{
		       padding:10px;
		       position: relative;
		       border: 1px solid #eee;
		       border-radius:4px;
		       margin:15px 0px;
		       .closeBox{
		          position: absolute;
		          top:-10px;
		          right:-10px;
		          font-size:22px;
		          z-index:1000;
		          cursor:pointer;
				  color: #606266;
		       }
		    }
		}
		.dfdfdfd{
			padding:5px;
			margin-bottom: 2px;
			position: relative;
			border: 1px solid #eee;
			.closeBox{
			   position: absolute;
			   top:-10px;
			   right:-10px;
			   font-size:22px;
			   z-index:1000;
			   cursor:pointer;
			   color: #606266;
			}
		}
		  
	}
	.config-ruleForm {
		.el-form-item{
			 margin-bottom: 0px;
		}
		.el-form-item__label{
			line-height: 26px;
		}
		.el-form-item__content{
			line-height: 26px;
		}
	}
</style>
