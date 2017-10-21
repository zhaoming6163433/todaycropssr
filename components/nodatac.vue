<template>
  <div>
    <div v-show="type==1" class="nodatac">
      <div><img :src="nodataimg"/></div>
      <div>{{text}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nodatac',
  props : ['text','nodataimg','type'],
  data () {
    return {

    }
  },
  methods : {
    gologin(){

    }
  },
  mounted(){

  }
}

</script>

<style lang="scss" >
  @import '~assets/scss/normailze.scss';
  .nodatac{
        position: relative;
        margin-top: 50%;
        left: 0;
        right: 0;
        text-align: center;
        >div:nth-child(1){
            width:8rem;
            margin: 0 auto;
        }
        >div:nth-child(2){
            font-size:1.4rem;
            color:$grey_c;
        }
  }
</style>
