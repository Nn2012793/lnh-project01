<template>
  <div>
      刘玉宝大傻逼
      <br>
      田一禾大天狗
      <br>
      刘乃豪超级帅
      <br>
      <button @click="get">获取数据</button>
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
}
</style>
