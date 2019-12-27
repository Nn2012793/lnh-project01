<template>
  <div class="container-login">
    <el-card class="container-card">
      <img src="../../assets/logo_index.png" alt />
      <el-form :model="loginform" :rules="loginRules" ref="loginform">
        <el-form-item prop="mobile">
          <el-input v-model="loginform.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginform.code"
            style="width:240px;marginRight:10px;"
          ></el-input>
          <el-button style="width:110px">验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    const validatorPass = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}/.test(value)) {
        return (callback(new Error('输入有误')))
      }
      return callback()
    }
    return {
      loginform: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            validator: validatorPass,
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入六位验证码',
            trigger: 'blur'
          },
          {
            len: 6,
            message: '请输入六位验证码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginform.validate(async valid => {
        try {
          const res = await this.$http.post('authorizations', this.loginform)
          store.setUser(res.data.data)
          this.$router.push('/')
        } catch (e) {
          this.$message.error('手机号或验证码错误')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .container-card {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    img {
      width: 230px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
