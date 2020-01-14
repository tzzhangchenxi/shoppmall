<template>
	<div>
		<swiper :options="swiperOption">
		  <swiper-slide v-for="item in banners" :key="item.idnex" class="swiper-slide">
					<a :href="item.link">
						<img :src="item.image" alt="" >
					</a>
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
		</swiper>
	</div>
	
</template>

<script>
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type: Array,
				default() {
				  return []
				}
			}
		},
		data(){
			return{
				swiperOption: {
					        //显示分页
					        pagination: {
					          el: '.swiper-pagination',
					          clickable: true //允许分页点击跳转
					        },
					        //设置点击箭头
					        navigation: {
					          nextEl: '.swiper-button-next', 
					          prevEl: '.swiper-button-prev'
					        },
					        //自动轮播
					        autoplay: {
					          delay: 400
					        },
					        //开启循环模式
					        loop: true,
					        //开启鼠标滚轮控制Swiper切换
					        mousewheel: true
					      }
				}
			}
		}

</script>

<style>
	.swiper-slide {
	  text-align: center;
	}
	.swiper-slide img{
		width: 100%;
	}
</style>
