<template>
  <div id="app" v-cloak>
    <div id="nav" style="font-size: 30px">
      <!--<router-link to="/">Home</router-link> |-->
      <!-- <router-link to="/about">About</router-link> -->
			<router-link to="/input">数字输入组件</router-link> <br>
			<router-link :to="{path: '/tabs'}">标签页组件</router-link>
    </div>
		<hr>
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
	value: number = 5 ;
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
