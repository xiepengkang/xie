<template>
<div class="header">
	<!-- <router-link to='/jia_setter'> -->
		<div class="back" @click="goBack">
		</div>
	<!-- </router-link> -->
	<h1 class="title">{{title}}</h1>
</div>
</template>
<script>
export default{
	props:{
		title:{
			type:String,
			required:true
		},
	},
	methods:{
		goBack(){
			this.$router.go(-1);
			// console.log(this.title)
		}
	}
}
</script>
<style lang="less">
.header{
	position: relative;
	width: 100%;
	height:0.8rem;
	text-align: center;
	border-bottom: 1px solid #e0e0e0;
	background-color: #fff;
	.back{
		width: 0.4rem;
		height: 0.4rem;
		position: absolute;
		left:10px;
		top:10px;
		background-image: url('../../assets/img/jia_back.png');
		background-size: cover;
	}
	.title{
		font-size: 18px;
		line-height: 0.8rem;
		color:#64ccf8;
		font-weight: 300;
	}
}
</style>