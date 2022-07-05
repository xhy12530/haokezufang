<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      class="Navbar"
      v-model="active"
      fixed
      route
      active-color="#50c796"
    >
      <van-tabbar-item to="/layout/home">
        <span>首页</span>
        <template #icon> <Icon icon="shouye"></Icon> </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/list">
        <span>找房</span>
        <template #icon> <Icon icon="chazhao"></Icon> </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/news">
        <span>资讯</span>
        <template #icon> <Icon icon="zixun"></Icon> </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/profile">
        <span>我的</span>
        <template #icon> <Icon icon="geren"></Icon> </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      active: '0'
    }
  }
}
</script>

<style scoped lang="less">
.iconfont {
  font-size: 40px;
}
</style>
