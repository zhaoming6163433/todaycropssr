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
    urlWebHttp = 'http://localhost:8080';
}else if (process.env.NODE_ENV == 'production') {
    urlWebHttp = 'http://www.todaypocket.cn';
}

export default{
	urlWebHttp,
	toastime,
	timeout,
    botkey
}
