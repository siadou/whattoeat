<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 17:22:47
 * @LastEditTime: 2019-09-25 16:58:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'assets/css/font.css'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
html, body {
  background-color: #f6ebd5;
  width:  100%;
  height: 100%;
}
body {
  background-image: radial-gradient(#f5c175 10%, rgba(0, 0, 0, 0) 0%), radial-gradient(#f5c175 10%, rgba(0, 0, 0, 0) 0%);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  width:  100%;
  height: 100%;
  margin: 0;
}
</style>
