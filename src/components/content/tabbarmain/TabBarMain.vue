<template>
		<tab-bar>
			<tab-bar-item path="/home" activeColor="red">
				<img slot="item-ico" src="~assets/img/tabbar/home.svg" alt="">
				<img slot="item-ico-active" src="~assets/img/tabbar/home_active.svg" alt="">
				<div slot="item-name">首页</div>
			</tab-bar-item>
			<tab-bar-item  path="/shopcar" activeColor="blue">
				<img slot="item-ico" src="~assets/img/tabbar/home.svg" alt="">
				<img slot="item-ico-active" src="~assets/img/tabbar/home_active.svg" alt="">
				<div slot="item-name">购物车</div>
			</tab-bar-item>
			<tab-bar-item  path="/profile" activeColor="yellow">
				<img slot="item-ico" src="~assets/img/tabbar/home.svg" alt="">
				<img slot="item-ico-active" src="~assets/img/tabbar/home_active.svg" alt="">
				<div slot="item-name">我的</div>
			</tab-bar-item>
		</tab-bar>
</template>

<script>
	import TabBar from "components/common/tabbar/TabBar"
	import TabBarItem from "components/common/tabbar/TabBarItem"
	export default {
		name:'TabBarMain',
		components:{
			TabBar,TabBarItem
		}
	}
</script>

<style>
</style>
