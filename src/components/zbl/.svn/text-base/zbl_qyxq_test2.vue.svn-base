<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <a target="_blank" @click='windowOpen'>点我</a>
    <img :src="url" alt="">图片
</div>
</template>
<script>
import {
    commonAjax
} from '../../api/api'
import axios from 'axios';
export default {
    data() {
        return {
            url: ''
        }
    },
    computed: {},
    components: {},
    methods: {
        windowOpen() {
        }
    },
    created() {
        var instance = axios.create({
            headers: {
                // "X-Access-Token": "f325670d-86d4-4826-a6f5-fd86ce4186c4",
                // "X-Access-Token": JSON.parse(sessionStorage.getItem("userInfo")).properties.accessToken,
                // "X-Service-Id": ServiceId,
                // "X-Service-Method": ServiceMethod,
                // "Content-Type": "application/json"
            }
        })

        instance.get('http://localhost:8080/proxyapi/pcn-core/dataProxyController/des3EncryptRequestProxy?JsonStr={%22birthday%22:%221986-06-23%22,%22card_number%22:%22640323198606230019%22,%22card_type%22:%2201%22,%22pati_name%22:%22%E5%B1%85%E6%B0%91001%22,%22phone%22:%2213926592220%22,%22query_time%22:%221501229669380%22,%22return_url%22:%22h5yuyue%22,%22sex%22:%221%22,%22token%22:%22b91575dccf30476188d3e85e05f07219%22,%22type%22:%221%22,%22user%22:%22test%22}').then(res => {
            this.url = res.data
        })
    }
}
</script>

<style lang='stylus' scoped>
mainColor = #35B46F
greyFont = #ADADAD
fontSize = .4rem
</style>
