<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:"Tabbar"
	}
</script>

<style>
	#tab-bar{
		background: #C6C6C6;
		display: flex;
		align-items: center;
		position: fixed;
		left:0;
		bottom: 0;
		right: 0;
	}
</style>
