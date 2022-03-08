<template>
  <div class="home">
    <div @click="btnFu">加载父</div>
    <div @click="btnZi">加载子</div>
  </div>
</template>

<!--  -->
<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    btnFu () {
      this.$router.push('/appfu')
      // this.$router.push('http://localhost:7101/')
      // window.open('http://localhost:7101/')
    },
    btnZi () {
      this.$router.push('/appfu/abc')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
