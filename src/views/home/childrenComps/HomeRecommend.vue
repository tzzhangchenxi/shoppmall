<template>
	<div class="home-recommend">
		<ul>
			<li v-for="item in recommends" :key="item.index">
				<a :href="item.link">
					<img :src="item.image" alt="">
					<p>{{item.title}}</p>
				</a>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		data(){
			return{
				
			}
		},
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				} 
			}
		}
	}
</script>

<style scoped="scoped">
	.home-recommend{
		border-bottom: 8px solid #eee;
	}
	
	.home-recommend ul{
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.home-recommend ul li{
		flex:1;
		list-style: none;
		padding: 15px 0px;
		font-size: 12px;
		text-align: center;
	}
	.home-recommend ul li img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>
