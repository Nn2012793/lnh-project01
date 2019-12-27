<template>
  <el-container class="container-struct">
    <el-aside :width="flag?'200px':'64px'" class="container-aside">
      <div class="logo" :class="{minLogo:!flag}"></div>
      <el-menu
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="!flag"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/content">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/sucai">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文字</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/myself">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container class="container-right">
      <el-header class="container-header">
        <span class="el-icon-s-fold icon" @click="flag=!flag"></span>
        <span class="icon-right">江苏传智播客科技教育有限公司</span>
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <img class="user-icon" src="../assets/avatar.jpg" alt />
            <span class="user-name">用户名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main class="container-main">
        <router-view></router-view>
        <router-view name="home"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      flag: true
    }
  }
}
</script>

<style lang="less" scoped>
.container-struct {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .container-aside {
    height: 100%;
    background-color: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: url(../assets/logo_admin.png) no-repeat center / 140px auto;
    }
    .el-menu {
      border-right: 0;
    }
    .minLogo {
      background-image: url(../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }
  .container-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .icon-right {
      font-size: 16px;
      vertical-align: middle;
      padding-left: 10px;
    }
    .my-dropdown {
      float: right;
      .user-icon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .user-name {
        font-size: 16px;
        color: #333;
        padding-left: 10px;
        vertical-align: middle;
      }
    }
  }
}
</style>
