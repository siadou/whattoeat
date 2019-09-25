<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 17:22:47
 * @LastEditTime: 2019-09-25 17:32:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="hello">
    <h1>今天吃什么</h1>
    <div>
      <div class="food">
        <img :src="food1" />
        <img :src="food2" />
        <img :src="food3" />
      </div>
    <div v-if="isStart" class="food-list">
      <div v-for="item in result" :key="item.key" class="item"> 
        <div class="label"><img :src="decorate" />{{item.label}}<img :src="decorate" /></div>
        <div class="content">{{item.value}}</div>
      </div>
    </div>
      <button @click="start">
        <span v-if="isStart">再 来</span>
        <span v-else>开 始</span>
      </button>
      </div>

  </div>
</template>

<script>
import config from '@/config.js'
import food1 from 'assets/svg/food-1.svg'
import food2 from 'assets/svg/food-2.svg'
import food3 from 'assets/svg/food-3.svg'
import decorate from 'assets/svg/decorate.svg'


const data = [{
  label: '蔬菜',
  key: 'vegetable'
}, {
  label: '海鲜',
  key: 'seafood'
}, {
  label: '主食',
  key: 'staple'
}]
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      isStart: false,
      result: [],
      food1,
      food2,
      food3,
      decorate
    }
  },
  methods: {
    start() {
      this.isStart = true
      let res = []
      data.forEach((value, index) => {
        let length = config[value.key].length
        let choose = config[value.key][Math.floor(Math.random() * length)]
        res.push({
          ...value,
          value: choose
        })
        
      })
      this.result = res
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1 {
  font-family: 'webfont';
  color: #e56f7f;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  font-size: 14px;
  width: 150px;
  height:45px;
  border-radius: 10px;
  background-color: #f9dfda;
  border: 3px dashed #e56f7f;
  color: #e56f7f;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background-color: #efc7bf;
  border: 3px dashed #e56f7f;
}
.food {
  text-align: center;
  margin: 20px 0;
}
.food img{
  width: 50px;
  height: 50px;
  margin: 0 20px;
}
.food-list {
  padding: 0 0 10px;
  font-size: 14px;
  color: #973e14;
}
.food-list .item{
  padding:  0 0 20px;
}
.food-list .item .label{
  padding: 5px 0 0;
  font-weight: bold;
}
.food-list .item .label>img{
  width: 15px;
  height: 15px;
  margin: 0 10px;
  vertical-align: middle;
}
</style>
