<template>
  <div class="home-wrapper" ref="homeWrapper"   v-loading="loading">
	  <body-con>  
		  <div class="searchBox">
			<div class="left"></div>
			<div class="right">
				<div class="boxddf" style="display: inline-block;">
					<span class="left_title">Deleted data</span>
					<el-switch
					  v-model="form.is_delete" active-value="1" inactive-value="0">
					</el-switch>
				</div>
				<el-date-picker
					v-model="form.date"
					type="date"
					placeholder="All data" 
					value-format="yyyy-MM-dd"  
					:picker-options="pickerOptions"
				>
				</el-date-picker>
			</div>
		  </div>  
		  <el-row :gutter="10">
			<el-col :span="12"> 
				<table-box-left  :tableConfig="columnleft" :search="form" type="left" :key="num"></table-box-left>
			</el-col> 
			<el-col :span="12">
				<table-box-right :tableConfig="columnRight"  :search="form" type="right" :key="num"></table-box-right>
			</el-col>
		 </el-row>  
	 </body-con>
    <!-- <div class="info">建议使用谷歌Chrome,以获得更优浏览效果</div> -->
	<!--用户管理输入框-->
  </div>
</template>

<script>
import store from '../../vuex/store';
import bodyCon from '../common/bodyCon.vue'
import tableBoxLeft from '../../components/tablebox/index.vue'
import tableBoxRight from '../../components/tablebox/index.vue'
import {getNowDateStr} from "../../utils/date.js"
export default {
  data () {
    return {
      column:[],
	  num:0,
	  loading:false,
      form: {
        date: '',
		is_delete:0
      },
	  columnleft:{},
	  columnRight:{},
	  pickerOptions: {
		disabledDate(time) {
		  return time.getTime() > Date.now();
		}
	  }
    }
  },
  created () {
    //this.getRoleTree()
	//let tmp = getNowDateStr()
	//this.$set(this.form,'date',tmp)
	this.getConifg()
	 
  },
  components:{
	bodyCon,
	tableBoxLeft,
	tableBoxRight
  },
  mounted () {},
  methods: {
	async getConifg() {
	    let resposeData = await this.axios.get('/get_table_config', {})
		 
		let _this = this
		if(!resposeData.list){
			return false
		}
		resposeData.list.forEach((item,index)=>{
			  //let one =  JSON.parse(item.table_config)
			  // if(item.table_name =='datainfo_a'){
				 //   _this.columnleft = one
			  // }else if(item.table_name =='datainfo_b'){
				 //  _this.columnRight = one
			  // }
			  if(index ===0){
			  		_this.columnleft = item
			  }
			  if(index ===1){
			  		_this.columnRight = item
			  }
		})
		this.num  ++
		// setTimeout(()=>{
		// 	 this.loading =false 
		// },200)
	}
  }
}
</script>
<style  lang="less">
  .el-tree-node__content{
     height:32px;
  }
  #menubox .el-form-item__label{
    width:15%;
  }
  .home-wrapper{
	   .searchBox{
		   display: flex;
		   justify-content: space-between;
		   margin-bottom: 10px;
		   text-align: right;
		   .left{
			    
			   display: flex;
			   align-items: center;
		   }
		   .right{
			   .boxddf{
				   padding-right: 10px;
			   }
			    .left_title{
					font-size: 12px;
					color:#606266;
			    }
				
		   }
	   }
  }
</style>
