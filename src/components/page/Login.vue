<template>
    <div>
        账号<input type="text" v-model="username">
        用户名<input type="password" v-model="password">
	<mt-button type="primary" @click="login" name="login">登录</mt-button>
    </div>
</template>
<script>
var md5 = require("md5");
import {
    requestLoginon
}
from '../../api/api';
import {
    Indicator,Button 
}
from 'mint-ui';
export default {
    components: {
    	  Indicator,"mt-button":Button,
    },
    data() {
        return {
            username: "18672992712",
            password: "123456",

        }

    },
    computed: {
      
    },
    mounted() {
        
    },
    methods: {
        login() {
                let params = {
                    "username": this.username,
                    "password": md5(this.password),//需要MD5加密
                    "tenantId": "hcn.shenzhen",
                };
                if (this.username != "" && this.password != "") {
                	Indicator.open('加载中...');
                    requestLoginon(params).then(res => {
                        if (res.code == 200) {

                            sessionStorage.setItem('userInfo', JSON.stringify(res.body));
                            // this.$router.push('home')
                        } else {
                        	
                        }
                       Indicator.close(); 
                    })
                } else {

                    alert(1111)
                }
            },

    }
}
</script>
<style>
</style>
