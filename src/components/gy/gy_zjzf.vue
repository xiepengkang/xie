<template>
<div class="app" style="overflow-x:hidden;height:100vh;background-color: #fafafa;">
	<div class="header">
		<mt-header title="诊间支付">
			<a slot="left" @click='$router.go(-1)'>
				<mt-button icon="back"></mt-button>
			</a>
			<a slot="right" @click='refreshThis'>
				<mt-button class="back"></mt-button>
			</a>
		</mt-header>
	</div>
	<div class="session">
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">待支付项目</mt-tab-item>
			<mt-tab-item id="2">已支付项目</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-checklist v-model="checkAll" :options="orgList"></mt-checklist>
				<mt-checklist v-model="feeRecordsCheck" :options="feeRecordsList"></mt-checklist>
				<div class="zjzf_footer">
					<mt-checklist v-model="checkAll" :options="['全选']"></mt-checklist>
					<div class="zjzf_footer_right">
						<mt-button type="primary" size="large" @click="toPay">结算</mt-button>
						<span class="zjzf_footer_right_price">
								合计：
								<span class="zjzf_footer_right_price_chart">￥</span>
						<span class="zjzf_footer_right_price_num" v-model="price">{{ price }}</span>
						</span>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item class="tab_2" id="2">
				<mt-cell title="今日支付" is-link></mt-cell>
				<mt-cell title="未执行记录" is-link></mt-cell>
				<mt-cell title="历史记录" is-link></mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</div>
</template>
<script>
import '../../assets/css/gy_style.css';
import {
	commonAjaxKy
} from '../../api/api.js';
import {
	Navbar,
	TabItem,
	MessageBox,
	Toast,
	Cell,
	Checklist,
	Indicator
} from 'mint-ui';
import {
	mapActions,
	mapState
} from 'vuex'
export default {
	data: function() {
		return {
			selected: '1',
			orgList: [],
			feeRecordsList: [],
			feeRecordsListDefault: [],
			orgCheck: [],
			feeRecordsCheck: [],
			drugsCheck: {},
			checkAll: ["全选"],
			price: 0,
			gy_pay_info: ["f2f28931-f900-4f26-8e21-4f95931334d5", "01^02^01^442000199208015602", []]
		}
	},
	mounted() {
		Indicator.open();
		let params = [
			"",
			"f2f28931-f900-4f26-8e21-4f95931334d5",
			"2017-04-29",
			"2017-07-29"
		];
		commonAjaxKy(JSON.stringify(params), 'hcn.diagnosisPayTrade', 'getUnpayedRecords').then(res => {
			Indicator.close();
			if (res.code == 200) {
				if (res.body && res.body.length > 0) {
					var that = this;
					res.body.forEach(function(item) {
						that.orgList.push({
							value: "全选",
							label: item.deptName + "(" + item.doctorName + ")"
						});
						that.orgCheck.push(item.deptId);
						item.feeRecords.forEach(function(item1) {
							that.feeRecordsList.push({
								value: item1.feeNo + "-" + item1.feeType + "-" + item1.feeTypeCode + "-" + item1.totalFee,
								label: item1.feeType
							});
							that.feeRecordsListDefault.push(
								item1.feeNo + "-" + item1.feeType + "-" + item1.feeTypeCode + "-" + item1.totalFee,
							);
							that.feeRecordsCheck.push(item1.feeNo + "-" + item1.feeType + "-" + item1.feeTypeCode + "-" + item1.totalFee);
							that.price += Number(item1.totalFee);
						});
					});
					console.log(that.feeRecordsCheck);
				} else {
					Toast('提示');
				}
			}
		});
	},
	methods: {
		refreshThis() {
			location.reload(true);
		},
		toPay() {
			if (this.orgCheck.length == 0) {
				Toast('请至少选择一项进行结算！');
				return;
			}
			var checkInfo = [];
			this.feeRecordsCheck.forEach(function(item) {
				var arrItem = item.split("-");
				checkInfo.push({
					feeNo: arrItem[0],
					feeType: arrItem[1],
					feeTypeCode: arrItem[2]
				});
			});
			this.gy_pay_info[2] = checkInfo;
			this.$store.dispatch('xie_common', {
				gy_pay_info: this.gy_pay_info
			});
			this.$router.push("/gy_zjzf_detail")
		}
	},
	watch: {
		"feeRecordsCheck": {
			handler: function(val, oldVal) {
				this.checkAll = this.feeRecordsCheck.length == this.feeRecordsList.length ? ["全选"] : [];
				this.price = 0;
				var that = this;
				this.feeRecordsCheck.forEach(function(item) {
					var arrItem = item.split("-");
					that.price += Number(arrItem[3]);
				});
			}
		},
		//			"checkAll": {
		//				handler: function(val, oldVal){
		//					if(this.checkAll.length > 0) this.feeRecordsCheck = this.feeRecordsListDefault;
		//					else this.feeRecordsCheck = [];
		//				}
		//			}
	}
}
</script>
