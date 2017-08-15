<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <div class="header">
        <mt-header title="通知人员">
            <router-link to="/notifyResidents/notifyDetails" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="body" v-for="item in personList">
    	<mt-cell :title="item.name" ></mt-cell>
    </div>
</div>
</template>
<script>
import {
    MessageBox,
    Toast
} from 'mint-ui'
import { Cell } from 'mint-ui';
import {
    mapActions,mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'

export default {
    data: function() {
        return {
            personList:[]
        }
    },
    components: {
    	'mt-cell':Cell
    },
    methods: {
        //获取列表详情
        getPersonList() {
            let params = [{"nrid":this.$route.params.id}]
            commonAjax(params, 'pcn.pcnNotifyResidentsDetailsService', 'getUserName').then(res => {
                if (res.code === 200) {
                    if (res.body.list.length) {
                        this.personList = res.body.list
                    } else {
                        this.detailsList = []
                        Toast({
                            message: '暂无结果',
                            duration: 500
                        })
                    }
                }
            })
        },
    },
    created() {},
    mounted() {
        this.getPersonList()
    },
}
</script>

<style lang='stylus' scoped>
mainColor = #23b2f6
greyFont = #ADADAD
fontSize = .4rem
.header {
    .mint-header {
        height: 1rem;
        font-size: fontSize;
        background-color: #fff;
        color: mainColor;
        border-bottom: 1px solid #ddd;

    }
    .next_step{font-size:0.3rem;}
}
.body{margin-top:-1px;}


</style>




