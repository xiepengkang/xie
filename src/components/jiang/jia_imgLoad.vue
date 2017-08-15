<template>
<div class="img-load">
	<div class="header">
		<router-link to='/jia_data'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">上传图片</h1>
	</div>
	
	<div class="control">
		<div class="load-box">
		    <span class="tip">点击<span class="add">+</span></span>
			<input type="file" ref='fileload' @change='uploadImage()' id="img_load" accept="image/*" multiple >
		</div>
	</div>
	<div class="img-box" ref='imgbox'>
		
	</div>
</div>
</template>
<script>
export default{
	methods:{
		uploadImage(){
			let fileload = this.$refs.fileload;
			let file = fileload.files[0],
				reader = new FileReader();
			// console.log(file);
			reader.onload = ()=>{
				let result = reader.result,
					img = new Image();
					img.src = result;
					img.width = '300';
					img.height = '150';
					img.style.marginTop = '10px'
					this.$refs.imgbox.appendChild(img)
					// console.log(111)
					// console.log(result)
					
			}
			reader.readAsDataURL(file);
		}
	}
}
</script>
<style lang="less">
.img-load{
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
	.control{
		display: inline-block;
		margin-left: 50%;
		transform:translateX(-50%);
		background-color: #59c9fd;
		margin-top:0.5rem;
		border-radius: 10px;
		position: relative;
		.tip{
			position: absolute;
			font-size: 24px;
			color:#d0f2f5;
			top:0.1rem;
			left:50%;
			transform:translateX(-50%);
			.add{
				font-size: 28px;
				padding-left: 0.1rem;
			}
		}
		#img_load{
			// color:transparent;
			// background-color: transparent;
			opacity: 0;
		}
	}
	.img-box{
		width: 300px;
		margin: 0.4rem 0 0.4rem 50%;
		transform:translateX(-50%);
	}
}
</style>
