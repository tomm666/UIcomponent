<template>
	<div class="main layout">
		<div @click="goback" class="back">返回</div>
		<h2>我是标签页组件</h2>
		<tabs v-model="activeKey">
			<pane label="标签一" name="1">
				标签一的内容
			</pane>
			<pane label="标签二" name="2">
				标签二的内容
			</pane>
			<pane label="标签三" name="3">
				标签三的内容
			</pane>
		</tabs>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tabs from "@/views/tabs/index.vue"; // @ is an alias to /src
import pane from "@/views/tabs/component/pane.vue";

@Component({
  components: {
    tabs,
	pane
  }
})
export default class Tab extends Vue  {
activeKey: any = "1"
goback(): void {
	this.$router.go(-1)
}
}
</script>

<style lang="less" scoped>
</style>
