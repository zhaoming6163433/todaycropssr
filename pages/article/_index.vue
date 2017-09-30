<template>
  <div class="article">
    <progressbar></progressbar>
  	<div v-html="readabilitylist.content"></div>
  </div>
</template>

<script>
import progressbar from '~/components/progressbar.vue'
import { api_get_article } from '~/plugins/axios'

export default {
  data(){
    return{
      readabilitylist:''
    }
  },
  async asyncData (context) {
    /**
    * 此处可以做成传地址id，通过params获取  article/_id
    * 抓取文章前调用获取url接口
    */

    let param = context.query||{};
    let res = await api_get_article(param);

    return {
      readabilitylist: res.result||{}
    }
  },
  components: {
    progressbar
  },
  methods: {

  },
  mounted(){

  }
}
</script>

<style>

</style>
<style lang="scss">
  @import '~assets/scss/normailze.scss';
   .article{
        display: block;
        position:relative;
        overflow-x:hidden;
        blockquote,pre{
            display: block;
            margin: 1.5em 0;
            padding: .5em 1.5em;
            white-space: pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
        }
   }
</style>
