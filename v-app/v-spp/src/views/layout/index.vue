<template>
	<div class="main layout">
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
export default class Index extends Vue  {
value: number = 5;
}
</script>

<style lang="less" scoped>
</style>
