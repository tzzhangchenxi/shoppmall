<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="navCenter">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"/></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import {getHomeMultidata} from 'network/home'
	import HomeSwiper from 'views/home/childrenComps/HomeSwiper.vue'
	import HomeRecommend from 'views/home/childrenComps/HomeRecommend.vue'
	export default {
		name: 'Home',
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommend
		},
		data() {
			return {
				banners: [],
				recommends: []
				}
			},
			created(){
				// 请求多个数据
				getHomeMultidata().then(res => {
					console.log(res)
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			}
		
	}
</script>

<style>
	.home-nav {
		background-color: var(--color-tint);
		color: var(--color-background);
	}
</style>
