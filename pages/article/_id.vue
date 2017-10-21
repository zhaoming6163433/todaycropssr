<template>
  <div class="ssr_article">
    <progressbar></progressbar>
    <div id="art_title" class="art_title">{{result.title}}</div>
    <div class="art_domain">{{result.domain}}</div>
    <div class="art_original" @click="checkoriginal(result.url)">查看原始文档</div>
  	<div class="art_content" v-html="readabilitylist.content"></div>
    <nodatac :text="nodatacobj.text"  :type="1" :nodataimg="nodatacobj.nodataimg" v-show="shownodata"></nodatac>
  </div>
</template>

<script>
import progressbar from '~/components/progressbar.vue'
import nodatac from '~/components/nodatac.vue'
import { api_get_article } from '~/plugins/axios'

export default {
    data(){
        return{
            shownodata:false,
            nodatacobj:{
                text:'啊哦，该文章不存在！',
                nodataimg:'/img/no_img_middle.png'//static用/表示
            },
        }
    },
    async asyncData (context) {
        /**
        * 此处可以做成传地址id，通过params获取  article/_id
        * 抓取文章前调用获取url接口
        */

        let params = context.params||{};
        console.log(params)
        let res = '';
        try{
            res = await api_get_article(params);
            res.result.title = res.result&&res.result.articleres&&res.result.articleres.title.indexOf('-')?res.result.articleres.title.split('-')[0]:res.result.articleres.title;
        }catch(e){

        }
        return {
            result: res.result,
            readabilitylist: res.result&&res.result.articleres || {},
            shownodata: res.result&&res.result.articleres? false : true
        }
    },
    components: {
        progressbar,
        nodatac
    },
    methods: {
        checkoriginal(url){
            window.open(url,'_blank');
        }
    },

    mounted(){
        if($('#art_title').text()) document.title = $('#art_title').text();
    }
}
</script>

<style>

</style>
<style lang="scss">
  @import '~assets/scss/normailze.scss';
   .ssr_article{
        font-family: ff-yoga-web-pro,Georgia,serif;
        display: block;
        position:relative;
        overflow-x:hidden;
        width: auto;
        margin: 0 auto;
        color: #222;
        padding-left: 20px;
        padding-right: 20px;
        .art_title{
            font-weight: 700;
            margin: 1rem 0 0;
            font-size: 2.4rem;
            line-height: 1.2;
            padding-bottom: .1rem;
            margin-top:3rem;
        }
        .art_domain{
            font-size:1.4rem;
            color:$grey_c;
            margin-top:1.5rem;
        }
        .art_original{
            font-size:1.4rem;
            color:$grey_c;
            text-decoration: underline;
            margin-top:1.5rem;
        }
        .art_content{
            margin-top:1.5rem;
            blockquote,pre{
                display: block;
                margin: 1.5rem 0;
                padding: .5rem 1.5rem;
                white-space: pre-wrap;
                white-space: -pre-wrap;
                white-space: -o-pre-wrap;
                word-wrap: break-word;
            }
            blockquote {
                color: #313131;
                border-left: 1px solid $grey_c;
                border-left-width: 2px;
            }
            b, strong {
                font-weight: 700;
                line-height: inherit;
            }
            p{
                font-family: inherit;
                font-size: 1.6rem;
                font-weight: 400;
                line-height: 1.5;
                margin-bottom: 3rem;
                text-rendering: optimizeLegibility;
            }
            ol,ul{
                margin: 1.5rem 0 1.5rem 2rem;
            }
            dl,ol,ul{
                font-family: inherit;
                font-size: 1.6rem;
                line-height: 1.5;
                list-style-position: outside;
            }
            li{
                margin: 0 0 .5rem;
            }
            h1,h2{
                word-wrap:break-word;
                line-height: 1.3;
                font-size: 2.2rem;
                margin: 1.7rem 0 1.7rem;
            }
            a{
                cursor: pointer;
                color: #43aea8;
                text-decoration: none;
            }
            code{
                font-family: Consolas,"Liberation Mono",Courier,monospace;
                font-weight: 700;
                color: #1f35be;
            }
        }
   }
</style>
