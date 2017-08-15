//签约管理确认详情  服务包 

<template>
	<div class="qygl_detail_yqx">
		
		<mt-header fixed title="服务包">
		    <mt-button icon="back"  slot="left"  @click="goback()"></mt-button>
		    <mt-button slot="right" @click.native='makeSure'>
			  	确定<span v-show='count'>({{count}})</span>
			</mt-button>
		</mt-header>
	
	
		<div class="main" ref='main'>
			<div class="main-con" v-for="(item, index) in list" @click="send(item)" :id='index'>
					<!--<div class="picture">
					</div>-->
					<div class="my_checkbox">
		                <input type="checkbox" value="item1" :id='item.spPackId' @click='addCount' ref='checkBox' />
		                <label :for="index"></label>
		            </div>
					
					<div class="type">
						<div class="service">{{item.spPackName}}</div>
						<div class="number">
							<div class="object fl">
								签约适合对象:
							</div>
							<span class="preson fl">{{item.suitableObject | suitFilter}}</span>
						</div>
					</div>
					<div class="detail">
						
						<em>详情</em>
						
					</div>
			</div>
				
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';	
import { mapState} from 'vuex'	
import {
    commonAjax, requestConfirmPassword,dicAjax
}
from '../../../api/api.js';
import { Header,Button } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
export default {
    data: function() {
        return {
        	list: [],
            value: '',
            suitableDic : [],
            count: 0,
            pagTitle: {},
            num: [],
            qydx: '',
			mao_doctorteamid:""
            
        }
    },
	components:{
		"mt-header":Header,
		"mt-button":Button
	},
    
    methods: {
       //选中数量计算
        addCount(e) {
            let propName = e.target.parentNode.parentNode.children[1].firstChild.innerHTML
            if (e.target.checked) {
                this.count++
                    this.pagTitle[propName] = 1
            } else {
                this.count--
                    delete this.pagTitle[propName]
            }
        },
    	
       //点击确定选中
        makeSure(e) {
        	
        	
        	//console.log(e.target.id)
            e.preventDefault()
            let inputEles = this.$refs.checkBox,
                flag = false
            inputEles.forEach(item => {
                if (item.checked) {
                    flag = true
                    this.num.push(item.id) 
                }
                console.log(this.num)
            })
//          sessionStorage.setItem("li_datas",this.num)
            
            			
           
            if (flag) {
            	let arrTemp = []

            JSON.parse(this.qydx).forEach(item=>{
            					
		                  		if(this.num.indexOf(item.spPackId + '')>=0){
		                  			let object = {}
		                  			object.applyId = 59,
			         				object.aserviceId = 165,
			         				object.personGroup = item.suitableObject,
			         				object.serviceId = item.spPackId, 
			         				object.serviceName = item.spPackNam,
			         				object.check = false,
			         				object.price = item.price,
			         				object.signPackId = 0,
			         				object.spPackId =  item.spPackId,
			         				object.spPackName = item.spPackNam,
			         				object.suitableObject = item.suitableObject,
			         				object.tenantId = "hcn.shenzhen"	
			         				arrTemp.push(object)
		                  		}
		                  		

		                  }),
            	sessionStorage.setItem('mao_aaaaa',JSON.stringify(arrTemp))
            	console.log(JSON.parse(sessionStorage.getItem(('mao_aaaaa'))))
            	
                sessionStorage.setItem("maodata",Object.keys(this.pagTitle))
                this.$router.push('/Residents/adjm/jmzlone')
            } else {
                Toast({
                    message: '请至少选择一个服务包',
                    duration: 1000
                })
            }
        },
       
       
       ServicePack() {
                let params = [{"spId": this.mao_doctorteamid,"spType":2}]
//              console.log(this.li_applyId)
                commonAjax(params, 'pcn.pcnSpPackService', 'spPackList').then(res => {
                    if (res.code == 200) {
						console.log(res)
	                  	this.list = res.body        	
						this.qydx = JSON.stringify(res.body);
                    }          
                })
            }, 	
     
      goback(){
      	this.$router.go(-1);
      },
      
     
      
	      //signPackId传值到服务包详情页面
	      send(item){
		  console.log(item.spPackId)        
	    },
	 },
   computed:{
            // ...mapState({
            // 	li_applyId:state => state.li_applyId
            // })
    	},
   
    mounted() {
    		this.suitableDic = JSON.parse(sessionStorage.getItem("suitableDic"));
//  		console.log(sessionStorage.getItem("suitableDic"))
			this.mao_doctorteamid=JSON.parse(sessionStorage.getItem("mao_tzfwbqq"));
			// console.log(this.mao_doctorteamid)
	        this.ServicePack()
			dicAjax().then((res)=>{
				let txt = [];
				this.dic = res.items;
				for(let i=0;i<this.dic.length;i++){
					txt.push(this.dic[i]['text']);
				}
				// console.log(this.txt)
				sessionStorage.setItem('txt',JSON.stringify(txt));
				// console.log(JSON.parse(sessionStorage.getItem('txt')))

			})
	   },
	   filters:{
            suitFilter(value){
                let showArr = [];
                let packkeyArr = value.split(',');
                packkeyArr.sort((a,b)=>{
                    return a-b
                })
                let txt1 = JSON.parse(sessionStorage.getItem('txt'))

                for(let i=0;i<packkeyArr.length;i++){
                    showArr.push(txt1[packkeyArr[i].replace(/\b(0+)/,'')]);
                }
                let value1 = showArr.join(',')
                return value1
            }
        }
	}
</script>

<style scoped>
html,body{
	background: #fff;
}
.qygl_detail_yqx {
	background: #fff;
}	
.qygl_detail_yqx .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
		 border-bottom: 1px solid #ccc;
	}	
.qygl_detail_yqx .mint-button{
		height: 1.5rem;
	}
.qygl_detail_yqx .mint-header{
		font-size: 0.33rem;
	}
.qygl_detail_yqx .mintui-back{
		font-size: 0.37rem;
	}
.qygl_detail_yqx .main{
	 margin-top: 1rem;
	}
.qygl_detail_yqx .main-con{
	 height: 1.5rem;
	 display: flex;
	 justify-content: space-between;
	 padding: 0 0.3rem;
	 border-bottom: 0.5px solid #ccc;
	}	
.qygl_detail_yqx .type{
	display: flex;
	flex-direction: column;
	height: 0.75rem;
	line-height: 0.75rem;
	}
.qygl_detail_yqx .detail{
	 display: flex;
	 align-items: center;
	 justify-content: center;	
	}
.qygl_detail_yqx .detail em{
		display: flex;
	 align-items: center;
	 justify-content: center;
		width: 1.2rem;
		height: 0.5rem;
		background: #fcc648;
		border-radius: 5px;
		color: #fff;
		font-size: 0.28rem;
	}
.qygl_detail_yqx .service{
		font-size: 0.33rem;
		color: blue;
	}
.qygl_detail_yqx .number{
		font-size: 0.28rem;
		color: #888888;
		height: 0.75rem;
	line-height: 0.75rem;
	}	
.qygl_detail_yqx .number span{
	    margin-left: 0.12rem;
		display: block;
		width: 2rem;
		overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
	}
.qygl_detail_yqx .picture{
	/*display: flex;
	align-items: center;
	justify-content: center;*/
	margin-top: 20px;
	width: 20px;
	height: 20px;
	/*height: 100%;*/
	border:1px solid #ccc;
	border-radius:50%;
	}
.qygl_detail_yqx .checked{
	background: url("../../../assets/img/mao_choose.png") no-repeat;
	background-size: contain;
}
.qygl_detail_yqx .picture img{
		width: 0.5rem;
		height: 0.5rem;
	}
.qygl_detail_yqx .line{
		width: 100%;
		height: 100%;
	}
.qygl_detail_yqx .my_checkbox{
		display: flex;
		justify-content: center;
		align-items: center;
	}		
.qygl_detail_yqx input{
		height: 0.5rem;
		width: 0.5rem;
	}							
						
</style>


