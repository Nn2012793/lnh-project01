<template>
  <div class="container-home">
    <el-container style="height: 650px; border: 1px solid #eee;">
      <el-aside width="200px" style="background-color: #002033">
        <el-menu>
          <el-menu-item-group style="background-color: #002033;">
            <img src="../assets/logo_admin.png" style="width:180px" />
            <el-menu-item style="color:lightgreen" index="1-1">
              <li class="el-icon-s-home"></li>
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item style="color:lightgreen" index="1-2">
              <li class="el-icon-document"></li>
              <router-link to="/content">内容管理</router-link>
            </el-menu-item>
            <el-menu-item style="color:lightgreen" index="1-3">
              <li class="el-icon-picture-outline"></li>
              <router-link to="/sucai">素材管理</router-link>
            </el-menu-item>
            <el-menu-item style="color:lightgreen" index="1-4">
              <li class="el-icon-s-promotion"></li>
              <router-link to="/publish">发布文章</router-link>
            </el-menu-item>
            <el-menu-item style="color:lightgreen" index="1-5">
              <li class="el-icon-chat-dot-round"></li>
              <router-link to="/comment">评论管理</router-link>
            </el-menu-item>
            <el-menu-item style="color:lightgreen" index="1-6">
              <li class="el-icon-present"></li>
              <router-link to="/fans">粉丝管理</router-link>
            </el-menu-item>
            <el-menu-item style="color:lightgreen" index="1-7">
              <li class="el-icon-setting"></li>
              <router-link to="myself">个人设置</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <!-- <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>-->
          <!-- </el-submenu> -->
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="font-size: 16px; font-weight : 600">
          <span style="float:left">
            <i class="el-icon-s-unfold" style="margin-right: 15px"></i>
            <span>江苏传智播客</span>
          </span>
          <el-dropdown class="mydropdown">
            <span>
              <img src="../assets/avatar.jpg" alt />
              <span>刘玉宝</span>
              <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main class="little_window">
          <!-- <el-table>
            <el-table-column label="日期" width="140"></el-table-column>
            <el-table-column label="姓名" width="120"></el-table-column>
            <el-table-column label="地址"></el-table-column>
          </el-table>-->
          <router-view></router-view>
          <router-view name="home"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  a {
    text-decoration: none;
    color: lightgreen;
  }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.little_window {
  background: url(../assets/welcome.jpg) no-repeat center / contain;
}
.mydropdown {
  float: right;
  img {
    vertical-align: middle;
  }
  span {
    padding: 0 6px;
  }
}
.router-link-active {
  color: lightblue;
}
</style>
