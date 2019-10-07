<template>
  <div id="app">
    <div id="nav" style="font-size: 30px">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
			<router-link to="/input-number">数字输入组件</router-link>

    </div>
			<input-number :max="50" :min="0" v-model="value" :step="5"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import inputNumber from "@/views/input-number/index.vue"; // @ is an alias to /src

@Component({
  components: {
    inputNumber
  }
})
export default class Home extends Vue {
	value: number = 5;
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
		text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
