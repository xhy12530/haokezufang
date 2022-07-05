<template>
  <div class="top-search">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #label>
        <div @click="onSearch">搜索</div>
      </template>
      <template #action>
        <Icon icon="ditu"></Icon>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {
      console.log('去城市列表')
    }
  }
}
</script>

<style scoped lang="less">
.top-search {
  position: absolute;
  display: flex;
  left: 0;
  top: 50px;
  background: none;
}
.iconfont {
  font-size: 50px;
  text-align: center;
}
:deep(.van-icon-search) {
  padding-left: 10px;
  border-left: 1px solid #999;
}
:deep(.van-search__label) {
  margin-right: 10px;
}
</style>
