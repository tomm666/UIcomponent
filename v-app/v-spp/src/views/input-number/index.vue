<template>
	<div  id="main">
		<!-- <div class="title">我是一个数字输入组件</div> -->
		<div class="input-number">
		<input type="text"
		 v-model="currentValue"
		 @keyup.up="handleUp" 
		 @keyup.down="handleDown" 
		 @change="handleChange" 
		/>
		<button @click="handleDown" :disabled="currentValue <= min"  >-</button>
		<button @click="handleUp" :disabled="currentValue >= max">+</button>
		</div>
		
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class InoutNumber extends Vue {
@Prop({type: Number, default: Infinity}) max!: number;
@Prop({type: Number, default: -Infinity}) min!: number;
@Prop({type: Number, default: 0}) value!: number;
@Prop({type: Number, default: 1}) step!: number;

currentValue: number = this.value;

// @Watch("currentValue")
// currentValueChange (val: any):void{
// 	this.$emit("input", val);
// 	this.$emit("on-change", val);
// }
// 
// @Watch("value")
// ValueChange (val: any):void{
// 	this.undateValue(val) ;
// }

handleDown():void {
	if(this.currentValue <= this.min) return;
		this.currentValue -= this.step;
}

handleUp(): void {
	if(this.currentValue >= this.max) return;
	this.currentValue += this.step;
}

undateValue(val:any): void {
	if(val > this.max) val = this.max;
	if(val < this.min) val = this.min;
	
	this.currentValue = val;
}

handleChange(event:any): void {
	let val: any = event.target.value.trim();
	let max: number = this.max;
	let min: number = this.min;
	if(this.isValueNumber(val)) {
		val = Number(val);
		this.currentValue = val;
		
		if(val > max) {
			this.currentValue = max;
		}else if(val < min) {
			this.currentValue = min;
		}
	}else{
		event.target.value = this.currentValue
	}
	
}

mounted() {
	// this.undateValue(this.value)
}

isValueNumber(value: any): boolean {
	let reg:any = /(^-?[0-9]+\.{1}\d+\$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/;
	
	return reg.test(value + "");
}
}
</script> 

<style lang="less" scoped>
	#main{
		display: flex;
		justify-content: center;
		// font-size: 16px;
		.title{
			flex: 1;
		}
	}
</style>
