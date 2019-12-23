<template>
  <div class="container-login">
    <el-card class="container-card">
      <img src="../../assets/logo_index.png" alt />
      <el-form :model="loginform">
        <el-form-item>
          <el-input v-model="loginform.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginform.psd"
            placeholder="请输入密码"
            style="width:240px;marginRight:10px;"
          ></el-input>
        <el-button style="width:110px">验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;marginTop:30px" >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginform: {
        name: '',
        psd: ''
      }
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
