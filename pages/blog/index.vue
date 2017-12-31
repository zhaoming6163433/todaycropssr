<template>
    <div class="ssr_blog absoluteall">
        <section>
            <div class="blogbackout">
                <div class="blogback"></div>
            </div>
        </section>
        <section class="contentc">
            <div class="openmenu" @click="openmenu"></div>
            <div class="addart" @click="addart"></div>
            <h1 class="titlec">我的博客</h1>
            <div class="contentin" v-for="(item,index) in artlist" :key="index">
                <h1 class="titlec1">{{item.title}}</h1>
                <div>{{item.date|datef}}</div>
                <div style="text-align:right;">
                    <span class="cursorblue" @click="godetail">阅读全文</span>
                </div>
            </div>
        </section>
        <section>
            <div class="menus" :class="menuanimate">
                <div class="backimg" @click="backimg"></div>
                <div class="myhead"><img src="../../static/img/default_head_img.png" /></div>
                <div class="cursorblue gologin" @click="gotologin"><span v-if="!islogin">登录</span><span v-else>退出</span></div>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        api_post_getartlist
    } from '~/plugins/axios'
    import ssrConfigs from '~/config/config'
    import util from '~/plugins/util'

    export default {
        data() {
            return {
                islogin: false,
                userInfo: '',
                menuanimate: 'menuanimate',
                artlist: [],
                nodatacobj: {
                    nodataimg: '/img/no_img_middle.png' //static用/表示
                },
            }
        },
        computed: {

        },
        components: {

        },
        filters:{
            datef(val){
                return new Date(val).Format("yyyy年MM月dd日");
            }
        },
        methods: {
            async post_getartlist() {
                let res = '';
                try {
                    let obj = util.islogin();
                    if (obj) {
                        res = await api_post_getartlist({
                            _id: obj._id
                        });
                        this.artlist = res.result;
                    } else {
                        this.$message.error({
                            message: "请先登录",
                            showClose: true
                        });
                    }
                } catch (e) {

                }
                return {
                    result: res.result,
                }
            },
            openmenu() {
                if (this.menuanimate == 'menuanimate') {
                    this.menuanimate = '';
                }
            },
            backimg() {
                this.menuanimate = 'menuanimate';
            },
            godetail() {
                this.$router.push({
                    name: 'blog-detail',
                    query: {
                        id: 123
                    }
                });
            },
            addart() {
                if (this.islogin) {
                    this.$router.push({
                        "name": "blog-addart"
                    })
                } else {
                    window.location.href = ssrConfigs.urlWebHttp + "/todaypocket/index.html#/nuxtlogin";
                }
            },
            gotologin() {
                if (!this.islogin) {
                    window.location.href = ssrConfigs.urlWebHttp + "/todaypocket/index.html#/nuxtlogin";
                } else {
                    window.location.href = ssrConfigs.urlWebHttp + "/todaypocket/index.html#/nuxtlogout";
                }
            },
            isloginfn() {
                let userInfo = util.getmyCookie('userInfo');
                try {
                    let obj = JSON.parse(userInfo);
                    if (obj._id) {
                        this.islogin = true;
                        this.userInfo = obj;
                    } else {
                        this.islogin = false;
                    }
                } catch (e) {
                    this.islogin = false;
                }
            }
        },

        mounted() {
            this.isloginfn();
            this.post_getartlist();
        }
    }
</script>

<style>

</style>

<style lang="scss">
    @import '~assets/scss/normailze.scss';
    .ssr_blog {
        background-color: $bottom_c;
        min-height: 100%;
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
        .contentc {
            padding: 24px 20px;
            max-width: 920px;
            position: relative;
            margin: 0 auto;
            display: block;
            .addart {
                cursor: pointer;
                width: 30px;
                height: 30px;
                right: 15px;
                position: absolute;
                background: url("../../static/img/icon_jia.png") no-repeat;
                background-size: 100%;
            }
            .openmenu {
                cursor: pointer;
                width: 24px;
                height: 24px;
                position: absolute;
                background: url("../../static/img/moreshow.png") no-repeat;
                background-size: 100%;
            }
            .titlec {
                color: $wihte_c;
                font-size: 45px;
                margin-top: 70px;
                text-align: center;
            }
            .titlec1 {
                color: #000000;
                font-size: 30px;
                text-align: left;
            }
            .contentin {
                background-color: $wihte_c;
                padding: 30px;
                margin-top: 30px;
                color: $gray_c;
                >div {
                    margin-top: 20px;
                }
                .cursorblue {
                    font-size: 15px;
                    text-align: right;
                    width: 70px;
                    ;
                }
            }
        }
        .menus {
            width: 284px;
            height: 100%;
            position: absolute;
            background-color: $wihte_c;
            box-shadow: 0px 0px 10px 1px $gray_c;
            top: 0;
            transition-duration: .3s;
            transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            .myhead {
                width: 120px;
                margin: 0 auto;
                border-radius: 100%;
                overflow: hidden;
            }
            .gologin {
                text-align: center;
                margin-top: 20px;
            }
        }
        .menuanimate {
            transform: translateX(-284px);
        }
    }

    @media only screen and (max-width: 800px) {
        .titlec {
            font-size: 24px!important;
            margin-top: 30px!important;
        }
        .titlec1 {
            font-size: 24px!important;
        }
    }
</style>
