<template>
    <div class="single-mould">
        <div class="title" @click="togglePop" ref="title">
            <span class="text">{{module.title}}</span>
            <span class="control pop" v-show="pop"></span>
            <span class="control push" v-show="!pop"></span>
        </div>
        <div class="content" v-show="listShow">
            <ul class="normal">
                <li class="item" v-for="item in module.nodes" v-show='item.visitNode.visible == 1'>
                    <!-- <div class="item-content" v-show='item.visitNode.visible === 1'> -->
                    <span class="require" v-show="item.visitNode.required ===1">*</span>
                    <span class="project">{{item.visitNode.cname}}</span>
                    <span class="validate-tip">!须在{{item.visitNode.rangevalue}}</span>
                    <div class="item-content fr">
                        <!-- 数字输入框 -->
                        <div class="number-input" v-if='item.visitNode.type ===1&&item.visitNode.visible==1'>
                            <!-- 只能输入整数 -->
                            <input type="text" v-model='item.visitNode.defaultvalue' @input="validate($event,item.visitNode.rangevalue,0)" :placeholder="item.visitNode.hint" v-if="item.visitNode.precise === 0">
                            <!-- 可以输入小数 -->
                            <input type="text" v-model='item.visitNode.defaultvalue' @input="validate($event,item.visitNode.rangevalue,1)" :placeholder="item.visitNode.hint" v-else-if="item.visitNode.precise === 1">
                        </div>
                        <!-- 文本输入框 -->
                        <div class="text-input" v-else-if='item.visitNode.type === 2&&item.visitNode.visible==1'>
                            <!-- <span>请输入{{item.visitNode.cname}}</span> -->
                            <input type="text" v-model='item.visitNode.defaultvalue' :placeholder="item.visitNode.hint">
                        </div>
                        <!-- 日期输入项 -->
                        <div class="date-input" v-else-if='item.visitNode.type === 3&&item.visitNode.visible==1'>
                            <span @click='openDatePicker($event,item.visitNode.rangevalue)' class="date">{{item.visitNode.hint}}</span>
                            <!-- <span @click='openDatePicker($event,item.visitNode.rangevalue)' 
								class="date ready" v-else>{{now}}</span> -->
                        </div>
                        <!-- 单选项 -->
                        <div class="radio-input" v-else-if='item.visitNode.type===4&&item.visitNode.visible==1' @click=''>
                            <span class="tip-value" @click='showCheckContent(item,$event)'>{{item.visitNode.hint}}</span>
                            <div class="radio-box">
                                <div class="header">
                                    <h1 class="title">{{item.visitNode.cname}}</h1>
                                    <div class="back" @click="hideCheckContent($event)">
                                    </div>
                                </div>
                                <ul class="check-content">
                                    <li class="check-item" @click='checkRadio(checkItem,item,$event)' v-for='checkItem in item.dictionary'>
                                        <span class="text fl">{{checkItem.itemName}}</span>
                                        <span class="check-flag fr"></span>
                                    </li>
                                </ul>
                            </div>
                            <!-- <input type="radio" > -->
                        </div>
                        <!-- 多选项 -->
                        <div class="checkbox-input" v-else-if='item.visitNode.type === 5&&item.visitNode.visible==1'>
                            <span class="tip-value" @click='showCheckBoxContent($event)'>{{item.visitNode.hint}}</span>
                            <div class="checkbox-box">
                                <div class="header">
                                    <h1 class="title">{{item.visitNode.cname}}</h1>
                                    <div class="back" @click="hideCheckboxContent($event,item.visitNode)">
                                    </div>
                                    <span class="complete" @click='complete($event)'>完成</span>
                                </div>
                                <!-- 没有选择限制 -->
                                <ul class="check-content" v-show='!item.mutex'>
                                    <li class="check-item" @click='toggleCheckbox($event)' v-for='checkItem in item.dictionary'>
                                        <span class="text fl">{{checkItem.itemName}}</span>
                                        <span class="check-flag fr"></span>
                                    </li>
                                </ul>
                                <!-- 有选择限制 -->
                                <ul class="check-content" v-show='item.mutex'>
                                    <li class="check-item" @click='checkCheckitem($event,item.dictionary,item.mutex,index)' v-for='(checkItem,index) in item.dictionary'>
                                        <span class="text fl">{{checkItem.itemName}}</span>
                                        <span class="check-flag fr"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 特殊项 -->
                        <div class="special-input" v-else-if='item.visitNode.type === 6&&item.visitNode.visible==1'>
                            <span>{{item.visitNode.hint}}</span>
                        </div>
                    </div>
                    <!-- </div> -->
                </li>
            </ul>
        </div>
        <mt-datetime-picker ref='picker' type='date' :startDate='startDate' v-model="pickerValue" @confirm='checkDate'>
        </mt-datetime-picker>
    </div>
</template>
<script>
import {
    DatetimePicker
}
from 'mint-ui'
export default {
    props: {
        module: Object,
        cascades:[]
    },
    data() {
        return {
            pickerValue: '',
            pop: true,
            listShow: false,
            now: '',
            startDate: new Date(0, 0, 1),
            // itemCurId:"",//点击联动type为4的item的ID
//          cascades: JSON.parse(localStorage.getItem('jia_jkcascades')),
            onematcharr: [],
        }
    },
    methods: {
        // 选择时间
        openDatePicker(event, range) {
                this.pickerValue = new Date();
                let target = event.currentTarget;
                target.id = 'dateCheck';
                // console.log(target);
                // console.log(range)
                this.$refs.picker.open();
            },
            // 保存数据方法
            saveData() {
                let items = this.$refs.normal.getElementsByClassName('item');
                // console.log(items)
                for (let i = 0, len = items.length; i < len; i++) {
                    let tipValue = items[i].getElementsByClassName('tip-value')[0];
                    // console.log(tipValue);
                    if (this.module.nodes[i].visitNode.type == 1 || this.module.nodes[i].visitNode.type == 2) {
                        if (tipValue.value !== '') {
                            this.saveDatas[this.module.nodes[i].visitNode.ename] = tipValue.value;
                        }
                        // console.log(tipValue.value)
                    } else {
                        if (tipValue.innerHTML !== this.module.nodes[i].visitNode.hint) {
                            this.saveDatas[this.module.nodes[i].visitNode.ename] = tipValue.innerHTML;
                        }
                    }
                }
                // console.log(this.saveDatas)
                // console.log(22)
                this.$emit('save', this.saveDatas)
            },
            checkDate(value) {
                // console.log(value)
                let year = value.getFullYear()
                let month = value.getMonth() + 1;
                let day = value.getDate();
                let date = `${year}-${month}-${day}`;
                let element = document.getElementById('dateCheck');
                // 红色提示元素
                let tip = element.parentNode.parentNode.parentNode.getElementsByClassName('validate-tip')[0];
                //取得大于号小于号的标志位
                let sign = tip.innerHTML.charAt(4)
                    // 当前时间大于还是小于选中时间的标志位
                let flag = this.validateDate(value);
                console.log(flag);
                if (sign === 'l' && flag) {
                    tip.classList.add('validate')
                } else if (sign === 'g' && !flag) {
                    tip.classList.add('validate')
                } else {
                    // if(tip.classList.)
                    if (tip.classList.length === 2) {
                        tip.classList.remove('validate')
                    }
                }
                element.innerHTML = date;
                element.style.color = '#333';
                element.id = '';
            },
            validateDate(value) {
                // 选中的时间
                let time1 = value.getTime();
                // 当前的时间
                let time2 = (new Date()).getTime();
                //如果flag是true，表示选中时间大于当前的时间，反之则小于
                let flag = time1 > time2 ? true : false;
                return flag;
            },
            togglePop() {
                this.pop = !this.pop;
                this.listShow = !this.listShow;
            },
            // 显示单选框内容
            showCheckContent(item, event) {
                // this.itemCurId=item.visitNode.id;//当前点击的item的id

                //首先判断点击的item的mutex属性是否存在，不存在就不用联动，存在的话 就用item.visitNode.id与cascades数组元素的nodeid匹配，这样获取到了第一次匹配后的数组onematcharr，如果onematcharr的长度大于零就进行第二次匹配，第二次匹配用选中的dictionary.index去匹配cascades的dicid
                //if (item.visitNode.mutex) {
						console.log(this.cascades);
                this.onematcharr = this.cascades.filter(function(el) { //第一次匹配
                    return el.nodeid == item.visitNode.id;
                });
                let target = event.currentTarget.parentNode.getElementsByClassName('radio-box')[0];
                target.style.display = 'block';
            },
            // 隐藏多选框内容
            hideCheckContent(event) {
                let target = event.currentTarget.parentNode.parentNode;
                target.style.display = 'none';
            },
            // 单选框选中处理方法
            checkRadio(checkItem,item,event) {
                // 单选框选中选项，并给选择框赋值的方法
                let target = event.currentTarget.parentNode.getElementsByClassName('check-flag');
                let target2 = event.currentTarget.getElementsByClassName('check-flag')[0];
                let target3 = event.currentTarget.parentNode.parentNode
                    .parentNode.getElementsByClassName('tip-value')[0];
                let value = event.currentTarget.getElementsByClassName('text')[0].innerHTML;
                let target4 = event.currentTarget.parentNode.parentNode;
                for (let i = 0; i < target.length; i++) {
                    target[i].classList.remove('checked')
                }
                target2.classList.add('checked');
                target3.innerHTML = value;
                target3.style.color = '#333';
                target4.style.display = 'none';
                if (this.onematcharr.length > 0) {
                    var twomatcharr = this.onematcharr.filter(function(el) { //第二次匹配
                        return el.dicid == checkItem.index;
                    });
                }
                console.log(twomatcharr);
                var that=this;
               var temmodules2=[];
                var temmodules=JSON.parse(localStorage.getItem('jia_jkmodules'));//因为点击规律的时候要隐藏 所以要用一分初始模板来替换
                temmodules.forEach(function(el){//判断点击的是属于哪个随访里面的
                	if(el.classify==item.visitNode.classify){
                		temmodules2=el
                	}
                })
                twomatcharr.forEach(function(el) {//第三次匹配
                    temmodules2.nodes.forEach(function(el2) {
                    	if(el.relationnodeid==el2.visitNode.id&&el.type!=2){//type等于2的时候不显示 // 0,显示,非空 1,非空 2,禁用 3,值范围 4,显示 5,等于6,大于7,小于8,大于并且等于9,小于并且等于
                    		el2.visitNode.visible=1
                    		console.log(el2.visitNode);
                    	}
                    })
                })
                that.module.nodes=temmodules2.nodes

            },
            // 显示多选框
            showCheckBoxContent(event) {
                let target = event.currentTarget.parentNode.getElementsByClassName('checkbox-box')[0];

                target.style.display = 'block';
                // this.refs.title.style.display='none'
            },
            // 隐藏多选框
            hideCheckboxContent(event) {
                let target = event.currentTarget.parentNode.parentNode;
                // console.log(target)
                target.style.display = 'none';
                // this.refs.title.style.display='block';
            },
            // 切换多选框选中状态
            toggleCheckbox(event) {
                let target = event.currentTarget.getElementsByClassName('check-flag')[0];
                if (target.classList.length === 3) {
                    target.classList.remove('checked')
                } else {
                    target.classList.add('checked');
                }
            },
            // 切换有排他性的多选框
            checkCheckitem(event, dictionary, mutex, index) {
                let target = event.currentTarget.getElementsByClassName('check-flag')[0];
                // 所有的多选项标志位
                let items = event.currentTarget.parentNode.getElementsByClassName('check-flag');
                // 与本选项互斥的选项下标数组
                let dicIds = [];
                let mutexItemIndex = [];
                if (target.classList.length === 3) {
                    target.classList.remove('checked')
                } else {
                    target.classList.add('checked');
                }
                // 对mutex根据其dicId做升序排列,使其与dictionary顺序保持一致

                // console.log(mutex)
                let sortMutex = mutex.sort(function(a, b) {
                    let value1 = a['dicId'];
                    let value2 = b['dicId'];
                    return value1 - value2;
                })

                for (let i = 0; i < sortMutex.length; i++) {
                    dicIds.push(sortMutex[i].dicId);
                }

                // 获取与本选项互斥的选项下标数组
                if (mutex[index].relationIds.length > 0) {
                    let arr = mutex[index].relationIds;
                    // console.log(arr);
                    // console.log(dicIds);
                    for (let i = 0, len = arr.length; i < len; i++) {
                        for (let j = 0, len = dicIds.length; j < len; j++) {
                            if (arr[i] == dicIds[j]) {
                                mutexItemIndex.push(j);
                            }
                        }
                    }
                }
                // 去除与当前所选项冲突的项
                for (let i = 0, len = mutexItemIndex.length; i < len; i++) {
                    // console.log(items[mutexItemIndex[i]])
                    if (items[mutexItemIndex[i]].classList.length == 3) {
                        items[mutexItemIndex[i]].classList.remove('checked');
                    }
                }
            },
            // 多选完成后
            complete(event) {
                //被选中的盒子
                let target = event.currentTarget.parentNode.parentNode.getElementsByClassName('checked');
                //要赋值的span盒子
                let target2 = event.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName('tip-value')[0];
                //要关闭的盒子
                let target3 = event.currentTarget.parentNode.parentNode;
                let arr = [];
                // console.log(target.length)
                for (let i = 0, len = target.length; i < len; i++) {
                    // console.log(target[i]);
                    let value = target[i].parentNode.getElementsByClassName('text')[0].innerHTML;
                    // target[i].classList.remove('checked');
                    arr.push(value)
                }
                // console.log(arr)
                target2.innerHTML = arr.join('，');
                target3.style.display = 'none'
                target2.style.color = '#333';
                target2.style.fontSize = '14px';
            },
            // 对数字输入框的内容进行验证
            validate(event, value, flag) {
                if (value !== '') {
                    // 数字输入框
                    let target = event.currentTarget;
                    let inputValue = target.value
                        // let inputValue2;
                        // console.log('开始数字验证')
                        // console.log(inputValue)
                        // console.log(flag)
                    if (flag === 0) {
                        // console.log('现在验证的是整数框')
                        inputValue = inputValue.replace(/[^\d]/g, '');
                        // console.log(inputValue)
                        // console.log(inputValue2)
                        target.value = inputValue;
                    } else if (flag === 1) {
                        // console.log('现在验证的是小数')
                        inputValue.replace(/[^\d.]/g, '');
                        // console.log(inputValue)
                        // target.value = inputValue;
                        if (inputValue.indexOf('.') > 0) {
                            // 取得第一个小数点的下表
                            let index = inputValue.indexOf('.');
                            // 截取到包括第一个小数点在内之前的字符串
                            let value1 = inputValue.substring(0, index + 1);
                            //替换这段字符
                            inputValue = inputValue.replace(value1, '')
                                // 替换所有不是数字的字符
                                // console.log(inputValue)
                            inputValue = inputValue.replace(/[^\d]/g, '');
                            // 给input框赋值
                            target.value = value1 + inputValue;
                            // console.log(target.value)
                        }
                    }
                    // 提示框
                    let target2 = event.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName('validate-tip')[0];
                    // 读取到输入的值
                    let targetValue = Number(inputValue);
                    let arr = value.split('-')
                    let min = Number(arr[0]);
                    let max = Number(arr[1]);

                    if (targetValue > max || min >= targetValue) {
                        target2.classList.add('validate')
                    } else {
                        target2.classList.remove('validate')
                    }
                }

            },
    },
    mounted() {
        // this.pickerValue = new Date();
        this.now = pickerValue.getFullYear() + '-' + pickerValue.getMonth() + '-' + pickerValue.getDate();
        // console.log(this.pickerValue)
    },
    components: {
        'mt-datetime-picker': DatetimePicker
    }
}
</script>
<style lang="less" scoped>
.single-mould {
    border-bottom: 1px solid #e0e0e0;
    .title {
        position: relative;
        font-size: 18px;
        line-height: 0.8rem;
        padding-left: 0.4rem;
        .control {
            display: block;
            width: 0.6rem;
            height: 0.6rem;
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            right: 4px;
            top: 0.1rem;
        }
        .pop {
            background-image: url('../../assets/img/jia_push.png');
        }
        .push {
            background-image: url('../../assets/img/jia_pop.png');
        }
    }
    .content {
        background-color: #fff;
        padding: 0 0.2rem;
        .normal {
            .item {
                font-size: 0;
                padding: 0.2rem 0;
                border-bottom: 1px solid #aaa;
                // line-height: 1rem;
                overflow: hidden;
                // padding-top: 4px;
                .require {
                    font-size: 14px;
                    color: #888;
                }
                .project {
                    font-size: 14px;
                    color: #888;
                    font-weight: 100;
                }
                .validate-tip {
                    font-size: 14px;
                    color: red;
                    margin-left: 10px;
                    visibility: hidden;
                }
                .validate {
                    visibility: visible;
                }
                .item-content {
                    display: inline-block;
                    font-size: 14px;
                    color: #888;
                    width: 40%;
                    text-align: right;
                    &>div {
                        display: inline-block;
                        // input:placeholder{
                        // 	font-size: 18px;
                        // 	color: #888;
                        // }	
                        input {
                            // height: 20px;
                            width: 2.8rem;
                            font-size: 14px;
                            // height: 20px;
                            outline-style: none;
                            border-color: transparent;
                            text-align: right;
                            margin-top: -5px;
                            // margin-right: 2px;
                            // position: relative;
                            // top: -4px;
                        }
                        span {
                            // display: inline-block;
                            color: #aaa;
                            font-size: 14px;
                            // white-space: no-wrap;
                            // overflow: hidden;
                            // text-overflow: ellipsis;
                            // width: 2rem;
                            // text-align: right;
                        }
                        .ready {
                            color: #333;
                            // font-size: 14px;
                        }
                        input::placeholder {
                            font-weight: 100;
                            font-size: 14px;
                            color: #aaa;
                            // white-space: no-wrap;
                            // overflow: hidden;
                            // text-overflow: ellipsis;
                            // padding-right: 3px;
                            // float:right;
                        }
                    }
                    .radio-input {
                        .radio-box {
                            position: fixed;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            z-index: 100;
                            // width: 100%;
                            // height: 100%;
                            display: none;
                            background-color: #fff;
                            // display: 
                            .header {
                                position: relative;
                                width: 100%;
                                height: 0.8rem;
                                text-align: center;
                                border-bottom: 1px solid #e0e0e0;
                                background-color: #fff;
                                .back {
                                    width: 0.4rem;
                                    height: 0.4rem;
                                    position: absolute;
                                    left: 10px;
                                    top: 10px;
                                    // float:left;
                                    background-image: url('../../assets/img/jia_back.png');
                                    background-size: cover;
                                }
                                .title {
                                    font-size: 18px;
                                    line-height: 0.8rem;
                                    color: #64ccf8;
                                    font-weight: 700;
                                    // margin-left: 0.6rem;
                                }
                            }
                            .check-content {
                                padding: 0 0.2rem;
                                background-color: #fff;
                                .check-item {
                                    font-size: 0;
                                    padding: 0.2rem 0;
                                    height: 0.6rem;
                                    line-height: 0.6rem;
                                    border-bottom: 1px solid #aaa;
                                    .text {
                                        color: #aaa;
                                        font-size: 16px;
                                        // line-height: 0.6rem;
                                    }
                                    .check-flag {
                                        position: relative;
                                        top: 4px;
                                        display: inline-block;
                                        height: 16px;
                                        width: 16px;
                                        border: 1px solid #aaa;
                                        border-radius: 50%;
                                    }
                                    .checked {
                                        // position: relative;
                                        // top:4px;
                                        // display: inline-block;
                                        // height: 16px;
                                        // width:16px;
                                        background-image: url('../../assets/img/jia_wo_choose.png');
                                        border-radius: 0;
                                        background-size: contain;
                                        border-color: transparent;
                                        background-repeat: no-repeat;
                                    }
                                }
                            }
                        }
                    }
                    .checkbox-input {
                        .checkbox-box {
                            position: fixed;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            // width: 100%;
                            // height: 100%;
                            z-index: 100;
                            display: none;
                            background-color: #fff;
                            // display: 
                            .header {
                                position: relative;
                                width: 100%;
                                height: 0.8rem;
                                text-align: center;
                                border-bottom: 1px solid #e0e0e0;
                                background-color: #fff;
                                .back {
                                    width: 0.4rem;
                                    height: 0.4rem;
                                    position: absolute;
                                    left: 10px;
                                    top: 10px;
                                    // float:left;
                                    background-image: url('../../assets/img/jia_back.png');
                                    background-size: cover;
                                }
                                .title {
                                    font-size: 18px;
                                    line-height: 0.8rem;
                                    color: #64ccf8;
                                    font-weight: 700;
                                    // margin-left: 0.6rem;
                                }
                                .complete {
                                    font-size: 16px;
                                    color: #64ccf8;
                                    font-weight: 300;
                                    position: absolute;
                                    right: 10px;
                                    top: 11px;
                                }
                            }
                            .check-content {
                                padding: 0 0.2rem;
                                background-color: #fff;
                                .check-item {
                                    font-size: 0;
                                    padding: 0.2rem 0;
                                    height: 0.6rem;
                                    line-height: 0.6rem;
                                    border-bottom: 1px solid #aaa;
                                    .text {
                                        color: #aaa;
                                        font-size: 16px;
                                        // line-height: 0.6rem;
                                    }
                                    .check-flag {
                                        position: relative;
                                        top: 6px;
                                        display: inline-block;
                                        height: 16px;
                                        width: 16px;
                                        border: 1px solid #aaa;
                                        // border-radius: 50%;
                                    }
                                    .checked {
                                        // position: relative;
                                        // top:4px;
                                        // display: inline-block;
                                        // height: 16px;
                                        // width:16px;
                                        background-image: url('../../assets/img/jia_wo_choose.png');
                                        border-radius: 0;
                                        background-size: contain;
                                        border-color: transparent;
                                        background-repeat: no-repeat;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
