<template>
  <div class="app bluetheme">
    <div class="onlyShowContent">
      <page-header></page-header> 
      <div class="page-body">
        <transition name="fade" mode="out-in">
        	<router-view></router-view> 
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import pageHeader from './common/pageHeader.vue'
export default {
  name: 'App',
  data () {
    return {
      menuList:[],
	  onlyShowContent: false
    }
  },
  created(){
	  
	 
  },
  mounted(){
	 if(this.$store.getters.token){
		 this.onlyShowContent = false
	 }else{
		 this.onlyShowContent = true
	 }
  },
  computed: {
     
  },
  components: {
    pageHeader
  },
  methods: {
     
  }
}
</script>
<style lang="less">
html, body{
  width: 100%;
  height: 100%;
  margin: 0px;
  background: #F5F5F5;
  overflow: hidden;
}

.onlyShowContent {
  height: 100%;

}
.contentBox{
}

.page-body{
  height: calc(~"100% - 50px");
  padding: 10px;
  margin-top: 50px;
  overflow: auto;
}
</style>
