<template>
    <div class="ssr_blog_detail absoluteall">
        <section>
            <div class="blogbackout">
                <div class="blogback"></div>
            </div>
        </section>
        <section class="contentc">
            <div class="backimg" @click="backago"></div>
            <h1 class="titlec">我的博客</h1>
            <div class="mydetail">
                <h1 class="titlec1">文章标题</h1>
                <div class="wenzihui">2017年12月27号 星期三</div>
                <div v-html="detail_c"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        api_get_article
    } from '~/plugins/axios'

    export default {
        data() {
            return {
                detail_c:'习近平做出了重要讲话'
            }
        },
        async asyncData(context) {

            let params = context.params || {};
            console.log(params)
            let res = '';
            try {
                res = await api_get_article(params);
            } catch (e) {

            }
            return {
                result: res.result,
            }
        },
        components: {

        },
        methods: {
            backago() {
                this.$router.go(-1);
            }
        },

        mounted() {

        }
    }
</script>

<style>

</style>

<style lang="scss">
    @import '~assets/scss/normailze.scss';
    .ssr_blog_detail {
        background-color: $bottom_c;
        min-height: 100%;
        .backimg {
            cursor: pointer;
            width: 18px;
            height: 18px;
            background: url("../../static/img/grayback3.png") no-repeat;
            background-size:100%;
            display:inline-block;
        }
        .blogbackout {
            position: absolute;
            width: 100%;
            height: 480px;
            overflow: hidden;
            .blogback {
                background: url("../../static/img/blogback.png") no-repeat;
                background-size: 100%;
                width: 100%;
                height: 19rem;
                position: absolute;
            }
        }
        .titlec {
            margin-left:30px;
            color: $wihte_c;
            font-size: 25px;
            margin-top: 10px;
            display:inline-block;
            text-align: left;
            font-weight: bold;
        }
        .contentc {
            padding: 24px 20px;
            max-width: 920px;
            position: relative;
            margin: 0 auto;
            display: block;
        }
        .mydetail{
            background-color:$wihte_c;
            >div{
                margin-top:20px;
            }
            padding:30px;
                margin-top:30px;
                .titlec1{
                    font-size: 25px;
                }
                .wenzihui{
                    color:$gray_c;
                }
        }
    }
</style>
