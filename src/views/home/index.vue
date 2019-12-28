<template>
  <div>
11111111111
  </div>
</template>

<script>
export default {
  methods: {
    get () {
      this.$http.get('user/profile')
    }
  }
}
</script>

<style lang="less" scoped>
div {
  color: #222;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  width: 100%;
  height: 100%;
  background: url(../../assets/welcome.jpg) no-repeat center / 700px auto;
}
</style>
