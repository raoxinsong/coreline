<template>
  <div class="home-wrapper" ref="homeWrapper">
	  <body-con>  
		  <el-row :gutter="10">
					 <el-col :span="24" style="text-align: right;padding-right: 86px;">
						 <el-button size="mini" @click="reback">Reback</el-button>
					 </el-col>
		  </el-row>
		  <el-row :gutter="10">
			<el-col :span="12"> 
				<table-config url="/account/roletree" :tableColumn="columnleft" type="left" :key="num"></table-config>
			</el-col> 
			<el-col :span="12">
				<table-config url="/account/roletree" :tableColumn="columnRight" type="right" :key="num"></table-config>
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
import tableConfig from '../../components/tableConfigbox/index.vue'
export default {
  data () {
    return {
		num:0,
		columnleft:{},
		columnRight:{},
    }
  },
  created () {
    this.getConifg()
  },
  components:{
	bodyCon,
	tableConfig
  },
  mounted () {},
  methods: {
	reback(){
	  this.$router.push('/user')	
	},
	async getConifg() {
	    let resposeData = await this.axios.get('/get_table_config', {})
		 
		let _this = this
		resposeData.list.forEach((item,index)=>{
			  //let one =  JSON.parse(item.table_config)
			  if(index ===0){
				   _this.columnleft = item
			  }
			  if(index ===1){
			  		_this.columnRight = item
			  }
		})
		this.num  ++
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
</style>
