import axios from 'axios';
let base = 'proxyapi'; //开发的时候用
 let base1 = 'http://122.224.131.235:9088';
//let base1 = 'http://10.8.3.40:80';
// let base = '';
//生成的时候用
// export const commonurl = `${base}/*.jsonRequest`; //通用的请求地址
// export const loginurl = `${base}/logon/login`; //登录地址
// export const logout = `${base}/logon/logout`; //退出地址
// export const rolesurl = `${base}/logon/myRoles`; //获取角色地址
// export const changepwd = `${base}/logon/changepwd`; //修改密码接口地址
// export const imguploadurl = `${base}/admin/file/upload1`; //图片上传接口地址
// export const imgview = "http://115.236.19.147:15981/bs-coms/upload/"; //图片预览地址
// export const filedowned = "http://115.236.19.147:15981/bs-coms/download/"; //文件下载地址
// export const area_url = `${base}/coms.dictionary.coms_region.dic/`; //省市联动请求地址
// export const filedownload_url = "http://115.236.19.147:15981/coms-web/download/"; //文件下载地址
// export const imgview = avatarFileId =>{${base}/hcn-web/upload/${avatarFileId}} ; //图片预览地址

export const imgview = avatarFileId => {
	return `${base1}/hcn-web/upload/${avatarFileId}`
}
export const voiceUrl = (voiceId) => {
    return `${base}/pcn-core/service/chat/voice/` + voiceId;
}
// 登录提交保存sessionStorage的accessToken
export const requestLoginon = params => {
		var instance = axios.create({
			headers: {
				"X-Service-Id": "",
				"X-Service-Method": "",
				"Content-Type": "application/json"
			}
		})
		return instance.post(`${base}/pcn-core/login`, params).then(res => res.data)
	}
	// 通用ajax请求方法
export const commonAjax = (params, ServiceId, ServiceMethod) => {
	var instance = axios.create({
		headers: {
			"X-Access-Token": sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")).roles[0].accessToken : "",
			"X-Service-Id": ServiceId,
			"X-Service-Method": ServiceMethod,
			"Content-Type": "application/json"
		}

	})
	return instance.post(`${base}/pcn-core/*.jsonRequest`, params).then(res => res.data);
};
//修改密码
export const requestConfirmPassword = params => {
	var instance = axios.create({
		headers: {
			"X-Service-Id": "",
			"X-Service-Method": "",
			"Content-Type": "application/json"
		}
	})
	return instance.post(`${base}/pcn-core/modify/pwd`, params).then(res => res.data)
}

//密码重置
export const requestChangepwd = (params) => {
	let instance = axios.create({
		headers: {
			"X-Service-Id": '',
			"X-Service-Method": '',
			"Content-Type": "application/json"
		}
	})
	return instance.post(`${base}/pcn-core/reset/pwd`, params).then(res => res.data);
}

//请求随访模板
export const requestModuld = (moduleid) => {
	let instance = axios.create({
		headers: {
			"X-Service-Id": '',
			"X-Service-Method": '',
			"Content-Type": "application/json"
		}
	})
	return instance
		.post(`${base}/pcn-core/api/auth/doctor/visitnode/list?t=1&moduleid=${moduleid}`)
		.then(res => res.data);
}

//用于编辑器的图片上传 
export const imguploadAjax = formId => {
		let imguploadform = document.getElementById(formId);
		let formData = new FormData(imguploadform);
		let instance = axios.create({
			headers: {
				"X-Service-Id": '',
				"X-Service-Method": '',
				"Content-Type": "multipart/form-data",
				"X-Access-Token": JSON.parse(sessionStorage.getItem("userInfo")).roles[0].accessToken,
			},

		});
		// return instance.post(`${base}/hcn-web/upload`, formData).then(res => res.data);
		return instance.post(`http://10.8.3.40:8081/hcn-web/upload`, formData).then(res => res.data);
	}
	//获得健康模板的方法
export const requestJkmoduld = (jkmoduleid) => {
	let instance = axios.create({
		headers: {
			"X-Service-Id": '',
			"X-Service-Method": '',
			"Content-Type": "application/json"
		}
	})
	return instance
		//			.post(`${base}/pcn-core/api/auth/doctor/visitnode/list`, jkmoduleid)
		.post(`${base}/pcn-core/api/auth/doctor/visitnode/list?t=1&moduleid=10&sign=${jkmoduleid}`)
		.then(res => res.data);
}

//http://122.224.131.235:9090/pcn-core/api/auth/doctor/visitnode/list?t=1&moduleid=1
//http://localhost:8080/proxyapi/pcn-core/api/auth/doctor/visitnode/list
//http://api-pcn.zsyjjkw.com:38080/pcn-core/api/auth/doctor/visitnode/list?t=1&moduleid=10
// 地区的请求
// export const areaAjax = (params) => {
// 	var instance = axios.create({
// 		headers: {
// 			"X-Access-Token": sessionStorage.getItem("accessToken"),
// 			"Content-Type": "application/json"
// 		},
// 		// method: 'get',
// 		params: params,
// 	})
// 	return instance.get(`${base}/coms.dictionary.coms_region.dic/`).then(res => res.data);
// };
export const imgUrl = (imgId) => {
	return `${base1}/hcn-web/upload/` + imgId;
}
export const areaAjax = (params) => {
	var instance = axios.create({
		headers: {
			"X-Access-Token": JSON.parse(sessionStorage.getItem("userInfo")).roles[0].accessToken,
			"Content-Type": "application/json"
		},
		// method: 'get',
		// params: params,
	})
	return instance.get(`${base}/pcn-core/dataProxyController/dictionaryServiceProxy?short_url=hcn.base.dictionary.region.dic?${params}`).then(res => res.data);
};

// 适用人群的字典请求
export const dicAjax = (params) => {
	var instance = axios.create({
		headers: {
			"X-Access-Token": JSON.parse(sessionStorage.getItem("userInfo")).roles[0].accessToken,
			"Content-Type": "application/json"
		},
		// method: 'get',
		// params: params,
	})
	return instance.get(`${base}/pcn-core/pcn.core.dictionary.suitableObject.dic`).then(res => res.data);
	// return instance.get(`${base}/pcn-core/dataProxyController/dictionaryServiceProxy?short_url=hcn.base.dictionary.region.dic?parentKey=440305000000&sliceType=4`).then(res => res.data);
};
//预约挂号链接跳转
export const yyghAjax = (params) => {
	var instance = axios.create({
		headers: {
			"Content-Type": "application/json;charset=utf-8",
//			"Access-Control-Allow-Origin": * ,
//			"Access-Control-Allow-Methods":"POST",
//			'Access-Control-Allow-Headers:x-requested-with,content-type'
		},
		// method: 'post',
		// params: params,
	})
	return instance.get(`${base}/pcn-core/dataProxyController/des3EncryptRequestProxy?JsonStr=${params}`).then(res => res.data);
};  

// 通用跨域ajax请求方法
export const commonAjaxKy = (params, ServiceId, ServiceMethod) => {
    var instance = axios.create({
        headers: {
            "X-Access-Token":JSON.parse(sessionStorage.getItem("userInfo")).roles[0].accessToken,
            "X-Service-Id": ServiceId,
            "X-Service-Method": ServiceMethod,
            "Content-Type": "application/json"
        }
    })
    return instance.get(`${base}/pcn-core/dataProxyController/hcnJsonRequestProxy?short_url=*.jsonRequest&params=${params}`).then(res => res.data);
}