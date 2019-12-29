<template>
  <div>
      <el-select
        :value="value"
        placeholder="请选择"
        clearable
        @change="changeChannel"
      >
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
  </div>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      options: []
    }
  },
  created () {
    this.getChannelOptions()
  },
  methods: {
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.options = data.channels
    },
    changeChannel (value) {
      if (!value) value = null
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
