<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">

    <div class="header">
        <mt-header title="服务小结">
            <router-link to="/dbfw-3" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>

    <div class="body">
        <div class="content">暂无数据</div>
        <mt-button @click.native="$router.push('/dbfw-3')" size="small">确定</mt-button>
    </div>
</div>
</template>
<script>
import {
    zbl_cityPickerIndex
} from '../../assets/js/zbl_cityPickerIndex.js'
import {
    requestLogList
} from '../../api/api'
import {
    mapActions,mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'
import {
    Actionsheet,
    DatetimePicker
} from 'mint-ui'
export default {
    data: function() {
        return {
        }
    },
    computed: {
    },
    components: {},
    methods: {
        ...mapActions([])
    },
    created() {
    },
    mounted() {
    },
}
</script>

<style lang='stylus' scoped>
@import "../../assets/css/zbldbfw_style.css"
mainColor = #00CDFF
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
}
.body {
    position: relative;
    .content {
        font-size: fontSize;
        text-align: center;
        margin-top:50%;
    }
    .mint-button {
        display: block;
        position: fixed;
        width: 100%;
        height: 1rem;
        bottom: 0;
        left: 0;
        color: #fff;
        background-color: mainColor
        cursor: pointer;
        font-size:fontSize;
    }
    .hideMore {  /*三点省略隐藏代码段*/
        display: inline-block;
        width: 4.5rem;
        text-align:right;
        overflow:hidden;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    // .container {
    //     position: relative;
    //     .line {
    //         border-top: 1px solid #ddd;
    //         margin-left: 10px;
    //     }
    //     .selectArea {
    //         background-color: #fff;
    //         height: 48px;
    //         // border-top: 1px solid #ddd;
    //         -webkit-box-align: center;
    //         -ms-flex-align: center;
    //         align-items: center;
    //         box-sizing: border-box;
    //         display: -webkit-box;
    //         display: -ms-flexbox;
    //         display: flex;
    //         font-size: 16px;
    //         line-height: 1;
    //         min-height: inherit;
    //         overflow: hidden;
    //         padding: 0 10px;
    //         width: 100%;
    //     }
    //     .arrow-right {
    //         position: absolute;
    //         border: 2.5px solid #c8c8cd;
    //         border-bottom: 0;
    //         border-left: 0;
    //         content: " ";
    //         top: 0.5rem;
    //         right: 20px;
    //         width: 5px;
    //         height: 5px;
    //         -webkit-transform: translateY(-50%) rotate(45deg);
    //         transform: translateY(-50%) rotate(45deg);
    //     }
    // }
}
.divide {
    // border-bottom: 4px solid #F2F2F2;
    height: 6px;
    background-color: #F2F2F2;
}
</style>
