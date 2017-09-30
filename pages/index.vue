<template>
  <div class="index"
  	<Logo></Logo>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import progressbar from '~/components/progressbar.vue'

export default {
  layout:'dark',
  data(){
    return{

    }
  },
  components: {
    Logo,
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
</style>
