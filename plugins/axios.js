import axios from 'axios'
import ssrConfigs from '~/config/config'

let axios_get = function(url,params){
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
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

export const api_get_article = (params) => axios_get(ssrConfigs.urlWebHttp + '/api/article/getArticle', params);


