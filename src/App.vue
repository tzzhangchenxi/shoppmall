<template>
  <div id="app">
	<router-view/>
	<MainTabBar/>	
  </div>
</template>

<script>
	import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
	export default {
		name:'app',
		components:{
			MainTabBar
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
	#app{
		width: 100%;
	}
</style>

