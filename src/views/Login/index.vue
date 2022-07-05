<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <!-- 登录框 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        placeholder="请输入账号"
        :rules="rules.username"
        size="large"
        maxlength="12"
      />
      <van-field
        v-model="user.password"
        type="number"
        name="password"
        placeholder="请输入密码"
        :rules="rules.password"
        size="large"
        maxlength="6"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" :loading="isDone"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// hzhmqd  123456
import { Toast } from 'vant'
import { login } from '@/api'
export default {
  data () {
    return {
      user: {
        username: 'hzhmqd',
        password: '123456'
      },
      rules: {
        username: [
          {
            pattern: /^[A-z0-9]{6,12}$/,
            message: '请填写A-z,0-9的6-12位用户名'
          }
        ],
        password: [{ pattern: /^[0-9]{6}$/, message: '请填写6位密码' }]
      },
      isDone: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push({
        path: '/layout/profile'
      })
    },

    async onSubmit () {
      this.isDone = true
      try {
        const res = await login(this.user)
        console.log(res.data.description)
        res.data.status === 200
          ? Toast.success(res.data.description)
          : Toast.fail(res.data.description)
      } catch (e) {
        console.log(e)
      } finally {
        this.isDone = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-cell {
  line-height: 80px;
  font-size: 40px;
}
.van-button__text {
  font-size: 40px;
}
</style>
