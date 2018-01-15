import axios from 'axios'
import ssrConfigs from '~/config/config'

axios.defaults.withCredentials = true

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

/**登录 bifi*/
export const api_post_login = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/login/user_login', params,'post');

/**注册 bifi*/
export const api_post_register = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/login/user_register', params,'post');

/**添加文章 */

export const api_post_addarticle = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/add_blog_art', params,'post');

/**查找文章 */
export const api_post_getartlist = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/getartlist', params,'post');

/**查找文章详情 */
export const api_get_artdetail = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/getartdetail', params,'post');


/**获取个人类别 */
export const api_get_my_seek = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/get_my_seek', params,'post');

/**删除文章 */
export const api_post_delartdetail = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/delartdetail', params,'post');
