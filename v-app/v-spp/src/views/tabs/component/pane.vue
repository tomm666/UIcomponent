<template>
	<div class="pane" v-show="show">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class Pane extends Vue {
	@Prop(String) name!: string;
	 @Prop({type: String, default: ""}) label!: string;
	show: boolean = true;
	updateNav(): void {
		(this as any).$parent.updateNav()
	}
	
	@Watch("label")
	LabelChange(): void {
		this.updateNav();
	}
	
	mounted() {
		this.updateNav()
	}
}
</script>

<style scoped lang="less">
</style>
