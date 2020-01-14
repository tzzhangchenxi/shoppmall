<template>
	<div class="nav-bar">
		<div class="left"><slot name="navLeft"></slot></div>
		<div class="center"><slot name="navCenter"></slot></div>
		<div class="right"><slot name="navRight"></slot></div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.nav-bar{
		display: flex;
		line-height: 44px;
		height: 44px;
		text-align: center;
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
	
</style>
