<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 17:22:47
 * @LastEditTime: 2020-04-15 14:14:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="['what-to-eat', isStart && 'is-start']">
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
      data.forEach((value) => {
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
<style lang="stylus" scoped>
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_p8ug667tci.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_p8ug667tci.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_p8ug667tci.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_p8ug667tci.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_p8ug667tci.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_p8ug667tci.svg#AlibabaPuHuiTiH') format('svg'); /* iOS 4.1- */
}

.what-to-eat {
  padding-top: 160px;
  &.is-start {
    padding-top: 100px;
  }
  h3 {
    margin: 40px 0 0;
  }
  h1 {
    text-shadow: 3px 1px 0px #ad5f13;
    color: #e56f7f;
    font-family: webfont
    font-weight: normal
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
    width: 150px;
    height:45px;
    border-radius: 10px;
    background-color: #f9dfda;
    border: none;
    // border: 5px solid #e56f7f;
    color: #e56f7f;
    cursor: pointer;
    box-shadow: 3px 4px 0 #e56f7f;
    outline: none;
    &>span {
      font-family: webfont;
      font-size: 16px;
      font-weight: normal;
    }
  }
  button:hover {
    background-color: #efc7bf;
    border: none;
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
    padding: 10px 0 10px;
    font-size: 14px;
    color: #973e14;
    margin: 0 60px 20px;
    background-color: rgba(255,255, 255, 0.6)
    border-radius: 16px;
  }
  .food-list>.item + .item{
    padding-top: 20px;
  }
  .food-list .item .label{
    font-weight: bold;
  }
  .food-list .item .label>img{
    width: 15px;
    height: 15px;
    margin: 0 10px;
    vertical-align: middle;
  }
}
</style>
