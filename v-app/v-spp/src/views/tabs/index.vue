<template>
	<div class="tabs">
		<div class="tabs-bar">
			<div :class="tabCls(item)" v-for="(item, index) in navList" :key="index" @click="handleChange(index)">
				{{ item.label }}
			</div>
		</div>
		<div class="tabs-content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class Pane extends Vue {
	@Prop({ type: [String , Number] }) value!: [string, number];
	currentValue: any = this.value;
	navList: Array<any> = [];
	
	tabCls(item:any): any {
		return [
			'tabs-tab',
			{
				//给当前选中的tab加一个class;
				'tabs-tab-active': item.name === this.currentValue
			}
		]
	}
	
	//点击tab标题时触发
	handleChange(index: number): void {
		let nav: any = this.navList[index];
		let name: string = nav.name;
		
		this.currentValue = name;
		
		//更新value；
		this.$emit('input', name);
		//触发一个自定义事件， 供父级使用
		this.$emit("on-click", name);
	}
	
	
	
	getTabs(): any {
		let tab: any = [];
		tab = this.$children.filter((item:any) => {
			return item.$options.name === "Pane";
		})
		return tab;
	}
	
	updateNav(): void {
		this.navList = [];
		let __this = this;
		this.getTabs().forEach((pane:any, index: number) => {
			__this.navList.push({
				label: pane.label,
				name: pane.name || index
			});
			if(!pane.name) pane.name = index;
			
			//设置当前tabs的索引
			if(index === 0) {
				if(!__this.currentValue) {
					__this.currentValue = pane.name || index;
				}
			}
		});
		
		this.updateStatus();
	}
	
	updateStatus(): void {
		let tabs: any = this.getTabs();
		let __this = this;
		//显示当前选中的tab对应的pane组件，隐藏没有选中的
		tabs.forEach((tab:any) => {
			return tab.show = tab.name === __this.currentValue;
		})
	}
	
	@Watch("value")
	ValueChange(val:any) {
		this.currentValue = val;
	}
	
	@Watch("currentValue")
	currentValueChange() {
		//在当前选中的tab发生变化时，更新pane的显示状态;
		this.updateStatus();
	}
}
</script>

<style lang="less" scoped>
[v-cloak] {
	display: none;
}
.tabs{
	font-size: 14px;
	color: #657180;
}
.tabs-bar:after{
	content: "";
	display: block;
	width:100%;
	height: 1px;
	background: #d7dde4;
	margin-top: -1px;
}
.tabs-tab{
	display: inline-block;
	padding: 4px 16px;
	margin-right: 6px;
	background: #fff;
	border: 1px solid #d7dde4;
	cursor: pointer;
	position: relative;
}
.tabs-tab-active{
	color: #3399ff;
	border-top: 1px solid #3399ff;
	border-bottom: 1px solid #fff;
}
.tabs-tab-active:before{
	content: "";
	display: block;
	height: 1px;
	background: #3399ff;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
.tabs-content{
	padding: 8px 0;
}
</style>
