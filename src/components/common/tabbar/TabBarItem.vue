<template>
	<div class="tab-bar-item" @click="itemClick()">
		<slot v-if="!isActive" name="item-ico"></slot>
		<slot v-else name="item-ico-active"></slot>
		<div :style="isActiveStyle">
			<slot name="item-name"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		data(){
			return{
			}
		},
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !==-1
			},
			isActiveStyle(){
				return this.isActive? {color:this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		height: 49px;
		font-size: 14px;
		text-align: center;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
	}
</style>
