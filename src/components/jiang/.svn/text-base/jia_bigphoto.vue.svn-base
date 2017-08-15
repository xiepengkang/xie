<template>
<div class="photo">
	<back title='图片'></back>
	<div class="content">
		<div class="img-box" v-for='src in srcs'>
			<div class="img" :style="'backgroundImage:url('+src+')'">
				
			</div>
			<!-- <img :src="src" width="100%" > -->
			<!-- <img :src="src"> -->
		</div>
	</div>
	<!-- <button @click="show">点击显示</button> -->
</div>
</template>
<script>
import back from '../common/jia_back.vue';
import { mapState } from 'vuex';
export default{
	data(){
		return{
			// srcs:[require('../../assets/img/certificate1.jpg'),require('../../assets/img/certificate2.jpg')] 
		}
	},
	components:{
		back
	},
	mounted(){
		// console.log(srcs)
	},
	computed:mapState({
		srcs: 'jia_srcs'
	})
}
</script>
<style lang="less" scoped>
.photo{
	.content{
		.img-box{
			width: 80%;
			margin-left: 10%;
			.img{
				width:100%;
				padding-top: 60%;
				margin-top: 20px;
			}
		}
	}
}
</style>