<template>
	<div class="main layout" dir="right">
		<div @click="goback" class="back">返回</div>
		<h2>我是数字输入组件</h2>
		<input-number :max="50" :min="0" v-model="value" :step="5"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputNumber from "@/views/input-number/index.vue"; // @ is an alias to /src

@Component({
  components: {
    InputNumber
  }
})
export default class Tab extends Vue  {
value: number = 5;
goback(): void {
	this.$router.go(-1)
}
}
</script>

<style lang="less" scoped>
// 	.layout{
// 		display: flex;
// 		text-align: 
// 		justify-content: right
// 	}
// 	.back{
// 		flex: 1
// 	}
</style>
