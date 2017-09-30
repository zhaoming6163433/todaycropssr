import ssrConfigs from '~/config/config'
import fetch from '~/config/fetch'

/**
 * 获取访问页面的内容
 */

export const api_get_article = (params) => fetch(ssrConfigs.urlWebHttp + '/api/article/getArticle', params, 'GET');
