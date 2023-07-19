<template>
  <div>
    <div class="title">
      {{ $t('login.title') }}
    </div>
    <van-button type="primary" @click="increment"> 主要按钮 {{ state.count }}</van-button>
  </div>
</template>
<script setup lang="ts">
import { useExample } from '../store/use-expmale'
const { increment, state } = useExample()
// const { data, pending, error, refresh } = await useFetch('http://localhost:3001/api')
// console.log(data)

// const getData = async () => {
//   const { data, pending, error, refresh } = await useFetch('http://localhost:3001/user', {
//     onRequest({ request, options }) {
//       // 设置请求头
//       options.headers = options.headers || {}
//       // options.baseURL = ''
//       console.log(request)
//       // options.headers.authorization = '...'
//     },

//     onRequestError({ request, options, error }) {
//       // 处理请求错误
//     },
//     onResponse({ request, response, options }) {
//       // 处理响应数据
//       // localStorage.setItem('token', response._data.token)
//       console.log(response)
//     },
//     onResponseError({ request, response, options }) {
//       // 处理响应错误
//     }
//   })
// }
// getData()
</script>
<style scope>
.title {
  width: 1px;
  height: 100px;
}
</style>
