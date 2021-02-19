<template>
	 <div class="contentbody">
		<div class="contentbg">
			<slot></slot>
		</div>
	 </div>
</template>

<script>
	export default {
	  data () {
	    return {
	    }
	  },
	  methods: {
	    
	  }
	}
</script>

<style lang="less">
	.contentbody{
		 padding: 10px;
		.contentbg{
			padding: 10px;
			background-color: #FFF;
		}	
	}
</style>
