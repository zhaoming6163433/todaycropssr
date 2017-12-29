<template>
    <div class="ssr_blog_addart">
        <div class="artcont">
            <div>
                <div class="backimg" @click="goback"></div>
                <el-button  style="float:right" type="primary" round>保存</el-button>
            </div>
            <div style="margin-top:20px">图文标题</div>
            <div><input type="text" v-model="mytitle" placeholder="请添加图文标题最多100个字符" maxlength="100" /></div>
            <div>图文内容</div>
        </div>
        <iframe id="chat_content" frameborder="1" height="100" width="300"></iframe>
    </div>
</template>

<script>
    import {
        api_get_article
    } from '~/plugins/axios'

    export default {
        data() {
            return {
                mytitle:""
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
            goback(){
                this.$router.go(-1);
            }
        },

        mounted() {
            var editor = document.getElementById("chat_content");
            editor.contentWindow.document.designMode = "on";
            setTimeout(() => {
                let htmlstr = $($("#chat_content").contents().find('html').find('body')[0]).html();
            }, 5000);
        }
    }
</script>


<style lang="scss">
    @import '~assets/scss/normailze.scss';
    .ssr_blog_addart {
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        bottom: 10px;
        .artcont {
            max-width: 700px;
            margin: 0 auto;
            width: 95%;
            font-size: 25px;
            position: relative;
            .saveart{
                position: absolute;
                right:0;
            }
            .backimg{
                display: inline-block;margin: 0;
            }
            input {
                font-size: 18px;
                width: 100%;
                outline: none;
                padding: 5px;
                margin: 10px 0;
                border:1px solid #ccc;
            }
        }
        #chat_content {
            padding: 0px;
            background-color: white;
            border: 1px solid #ccc;
            background: #ffffff;
            color: #333;
            display: block;
            height: 68%;
            margin: 20px auto;
            max-width: 700px;
            padding: 0;
            width: 95%;
            visibility: visible;
        }
    }
</style>
