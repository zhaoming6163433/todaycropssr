/**
 * 配置编译环境和线上环境之间的切换
 *
 * urlWebHttp: 域名地址
 * toastime: toast时间
 *
 */
const toastime = 3000;
const timeout = 10000;
const botkey = 'b5e54604d962464fb5544c73e659f494';

let urlWebHttp = '';


//切换环境
if (process.env.NODE_ENV == 'development') {
	urlWebHttp = 'http://47.52.227.158';
}else if (process.env.NODE_ENV == 'production') {
	urlWebHttp = 'http://47.52.227.158';
}

export default{
	urlWebHttp,
	toastime,
	timeout,
	botkey
}
