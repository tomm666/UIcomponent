<template>
  <div class="home">
		
		<!-- <router-view /> -->
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
export default class Home extends Vue  {
	value: number = 5;
}
</script>
