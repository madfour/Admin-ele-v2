<template>
    <div class="sidebar">
      <div class="logo">
        <el-image :src="require('@/assets/image/logo.png')" alt=""></el-image>
        <div class="title">Admin.Jc</div>
      </div>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>

    </div>
</template>

<script>
export default {
  name: 'sidebar'
};
</script>

<style lang="less" scoped>
  @import '~@/styles/variable';

  .sidebar{
    width: @sidebar_with;
    background-color: @sidebar_bgColor;
    color: @sidebarColor;
  }

  .logo{
    height: @logoHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    line-height: 38px;
    .el-image{
      width: 38px;
    }
  }
</style>
