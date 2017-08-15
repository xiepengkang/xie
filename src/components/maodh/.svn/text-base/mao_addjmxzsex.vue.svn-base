<template>
    <div class="mao_xzxb">
        <mt-header fixed title="性别">
		  <router-link to="/Residents/adjm/jmzlone" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
          <mt-button slot="right" @click="mao_okwcl">完成</mt-button>
		</mt-header>
        <div>
            <mt-radio title="" v-model="value" :options="[{label:'男',value:'男'}, {label:'女',value:'女'}]" align="right"></mt-radio>
        </div>
    </div>
</template>

<script>
import { Radio,Header,Button } from 'mint-ui';
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                value:"",
            }
        },
        components:{
            "mt-radio":Radio,
            "mt-header":Header,
            "mt-button":Button
        },
        methods:{
            mao_okwcl(){
                sessionStorage.setItem('maoxzsex',JSON.stringify(this.value))
                this.$router.push("/Residents/adjm/jmzlone")
            }
        },
        watch:{
            value(curVal,oldVal){
                this.value=curVal
            }
        }
    }
</script>

<style scoped>
    html,body{
	height: 100%;
	width: 100%;
	background: #EBEBEB;
	position: relative;
}	
.mao_xzxb {
	background: #EBEBEB;
}	
.mao_xzxb .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
        border-bottom:1px solid #eee;
        font-size: 0.33rem;
	}	
.mao_xzxb .mint-button{
		height: 1rem;
	}
.mao_xzxb .mintui-back{
		font-size: 0.37rem;
	}
.mao_xzxb .mint-radiolist{padding-top:1rem;}

</style>