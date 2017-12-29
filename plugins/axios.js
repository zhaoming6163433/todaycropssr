import axios from 'axios'
import ssrConfigs from '~/config/config'

let axios_get = function(url,params,type){
    return new Promise((resolve, reject) => {
        type = type.toLowerCase();
        let param = {};
        if(type=="post"){
            param = params;
        }
        if(type=="get"){
            param = {
                params: params
            }
        }
        axios[type](url, param)
        .then(function (response) {
            if(response.data.code == '200'){
                resolve(response.data)
            }else{
                reject(response.data);
            }
        })
        .catch(function (error) {
            console.log(error.message);
            reject(error);
        });
    });
}

export const api_get_article = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/getArticle', params,'get');

/**登录 */
export const api_post_login = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/login/user_login', params,'post');

