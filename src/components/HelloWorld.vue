<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>งานในตอนนี้</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">งานส่วนตัว</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">งานออกค่าย</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">งานชมรม</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">งานประชาสัมพันธ์</a>
      </li>
    </ul>
    <br>
    <h2>เกี่ยวกับตัวฉัน</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">บทความยามว่าง</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">แบบเสื้อ</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">หนังสือออนไลน์</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">รอ</a>
      </li>
    </ul>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'helloWorld',
  data () {
    return {
      msg: 'Welcome To Error Never Die'
    }
},
methods: {
  logout: function() {
    firebase.auth().signOut().then(()=> {
      this.$router.replace('login')
    })
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
