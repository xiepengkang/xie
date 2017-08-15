<template>
    <div class="mao_addjmfwjl">
        <mt-header title="选择居民">
        <router-link to="/fwjldetail" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <div class="mao_mmserch">
            <mt-search v-model="value" cancel-text="取消" placeholder="搜索服务对象、服务人、服务项目"></mt-search>
        </div>
        <div>
            <mt-index-list>
            <mt-index-section v-show='mao_aexist' index="A">
                <mt-cell v-for="item in Amlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_bexist' index="B">
                <mt-cell v-for="item in Bmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_cexist' index="C">
            <mt-cell v-for="item in Cmlist"> 
            <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_dexist' index="D">
                <mt-cell v-for="item in Dmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_eexist' index="E">
                <mt-cell v-for="item in Emlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_fexist' index="F">
                <mt-cell v-for="item in Fmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_gexist' index="G">
                <mt-cell v-for="item in Gmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_hexist' index="H">
                <mt-cell v-for="item in Hmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_iexist' index="I">
                <mt-cell v-for="item in Imlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_jexist' index="J">
                <mt-cell v-for="item in Jmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_kexist' index="K">
                <mt-cell v-for="item in Kmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_lexist' index="L">
                <mt-cell v-for="item in Lmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_mexist' index="M">
                <mt-cell v-for="item in Mmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_nexist' index="N">
                <mt-cell v-for="item in Nmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_oexist' index="O">
                <mt-cell v-for="item in Omlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_pexist' index="P">
                <mt-cell v-for="item in Pmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_qexist' index="Q">
                <mt-cell v-for="item in Qmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_rexist' index="R">
                <mt-cell v-for="item in Rmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_sexist' index="S">
                <mt-cell v-for="item in Smlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_texist' index="T">
                <mt-cell v-for="item in Tmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_uexist' index="U">
                <mt-cell v-for="item in Umlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_vexist' index="V">
                <mt-cell v-for="item in Vmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_wexist' index="W">
                <mt-cell v-for="item in Wmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_xexist' index="X">
                <mt-cell v-for="item in Xmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_yexist' index="Y">
                <mt-cell v-for="item in Ymlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            <mt-index-section v-show='mao_zexist' index="Z">
                <mt-cell v-for="item in Zmlist"> 
                <router-link :to="{name:'maddxzfw',params:{'id':item.mpiId}}">
                <div class="mao_diaoqys">
                    <p>{{item.personName}}</p>
                    <span>{{item.provinceText}}{{item.cityText}}{{item.districtText}}{{item.streetText}}{{item.address}}</span>
                </div>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
                </mt-cell>
            </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>

<script>
import { Header,Button,Search,IndexList,IndexSection,Cell,Indicator } from 'mint-ui';
import { commonAjax } from "../../api/api.js";
import "../../assets/css/mao_style.css";
import PinYin  from "../../assets/js/mao_zizhuanpin.js";
    export default {
        data:function(){
            return{
                value:"",
                Amlist:[],
                Bmlist:[],
                Cmlist:[],
                Dmlist:[],
                Emlist:[],
                Fmlist:[],
                Gmlist:[],
                Hmlist:[],
                Imlist:[],
                Jmlist:[],
                Kmlist:[],
                Lmlist:[],
                Mmlist:[],
                Nmlist:[],
                Omlist:[],
                Pmlist:[],
                Qmlist:[],
                Rmlist:[],
                Smlist:[],
                Tmlist:[],
                Umlist:[],
                Vmlist:[],
                Wmlist:[],
                Xmlist:[],
                Ymlist:[],
                Zmlist:[],
                xcmsg:[],
                mloadingshow:true,
                mao_aexist:false,
                mao_bexist:false,
                mao_cexist:false,
                mao_dexist:false,
                mao_eexist:false,
                mao_fexist:false,
                mao_gexist:false,
                mao_hexist:false,
                mao_iexist:false,
                mao_jexist:false,
                mao_kexist:false,
                mao_lexist:false,
                mao_mexist:false,
                mao_nexist:false,
                mao_oexist:false,
                mao_pexist:false,
                mao_qexist:false,
                mao_rexist:false,
                mao_sexist:false,
                mao_texist:false,
                mao_uexist:false,
                mao_vexist:false,
                mao_wexist:false,
                mao_xexist:false,
                mao_yexist:false,
                mao_zexist:false,
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-search":Search,
            "mt-index-list":IndexList,
            "mt-index-section":IndexSection,
            "mt-cell":Cell,

        },
        mounted:function(){
            Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
            let params=[{"teamId":""}];
            commonAjax(params,'pcn.mpiDemographicinfoService','getNoServiceExecMpiList').then(res=>{
                 if(res.code==200){
                    //  console.log(res.body)
                    for(var i=0;i<res.body.length;i++){
                        // console.log(res.body[i])
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=="a"){
                            this.Amlist.push(res.body[i]);
                            if(this.Amlist.length>0){
                                this.mao_aexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='b'){
                            this.Bmlist.push(res.body[i]);
                             if(this.Bmlist.length>0){
                                this.mao_bexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='c'){
                            this.Cmlist.push(res.body[i]);
                             if(this.Cmlist.length>0){
                                this.mao_cexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='d'){
                            this.Dmlist.push(res.body[i]);
                            if(this.Dmlist.length>0){
                                this.mao_dexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='e'){
                            this.Emlist.push(res.body[i]);
                            if(this.Emlist.length>0){
                                this.mao_eexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='f'){
                            this.Fmlist.push(res.body[i]);
                            if(this.Fmlist.length>0){
                                this.mao_fexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='g'){
                            this.Gmlist.push(res.body[i]);
                            if(this.Gmlist.length>0){
                                this.mao_gexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='h'){
                            this.Hmlist.push(res.body[i]);
                            if(this.Hmlist.length>0){
                                this.mao_hexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='i'){
                            this.Imlist.push(res.body[i]);
                            if(this.Imlist.length>0){
                                this.mao_iexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='j'){
                            this.Jmlist.push(res.body[i]);
                            if(this.Jmlist.length>0){
                                this.mao_jexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='k'){
                            this.Kmlist.push(res.body[i]);
                            if(this.Kmlist.length>0){
                                this.mao_kexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='l'){
                            this.Lmlist.push(res.body[i]);
                            // console.log(this.Lmlist)
                            if(this.Lmlist.length>0){
                                this.mao_lexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='m'){
                            this.Mmlist.push(res.body[i]);
                            if(this.Mmlist.length>0){
                                this.mao_mexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='n'){
                            this.Nmlist.push(res.body[i]);
                            if(this.Nmlist.length>0){
                                this.mao_nexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='o'){
                            this.Omlist.push(res.body[i]);
                            if(this.Omlist.length>0){
                                this.mao_oexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='p'){
                            this.Pmlist.push(res.body[i]);
                            if(this.Pmlist.length>0){
                                this.mao_pexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='q'){
                            this.Qmlist.push(res.body[i]);
                            if(this.Qmlist.length>0){
                                this.mao_qexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='r'){
                            this.Rmlist.push(res.body[i]);
                            if(this.Rmlist.length>0){
                                this.mao_rexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='s'){
                            this.Smlist.push(res.body[i]);
                            if(this.Smlist.length>0){
                                this.mao_sexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='t'){
                            this.Tmlist.push(res.body[i]);
                            if(this.Tmlist.length>0){
                                this.mao_texist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='u'){
                            this.Umlist.push(res.body[i]);
                            if(this.Umlist.length>0){
                                this.mao_uexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='v'){
                            this.Vmlist.push(res.body[i]);
                            if(this.Vmlist.length>0){
                                this.mao_vexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='w'){
                            this.Wmlist.push(res.body[i]);
                            if(this.Wmlist.length>0){
                                this.mao_wexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='x'){
                            this.Xmlist.push(res.body[i]);
                            if(this.Xmlist.length>0){
                                this.mao_xexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='y'){
                            this.Ymlist.push(res.body[i]);
                            if(this.Ymlist.length>0){
                                this.mao_yexist=true;
                            }
                        }
                        if(PinYin.getFirstLetter(PinYin.toConvert(res.body[i].personName))=='z'){
                            this.Zmlist.push(res.body[i]);
                            if(this.Zmlist.length>0){
                                this.mao_zexist=true;
                            }
                        }
                    }
                    Indicator.close();
                }
            })
        }
    }
</script>

<style scoped>
    .mao_addjmfwjl{}
    .mao_addjmfwjl .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_addjmfwjl .mint-header .mint-button{height:.96rem;}
    .mao_addjmfwjl .mao_mmserch{height:100%;border-bottom:1px solid #ccc;display:flex;align-items:center;}
    .mao_addjmfwjl .mao_mmserch .mint-search{height:100%;flex:1;}
    .mao_addjmfwjl .mao_diaoqys{width:5rem;height:100%;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
</style>