<template>
  <div class="scroller-btns">
    <div class="scroller-btns__left" @click="$emit('left')"/>
    <div class="scroller-btns__right" @click="$emit('right')"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ScrollerBtns",
  emits: ["left", "right"]
})
</script>

<style>
.scroller-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 87px;
}

.scroller-btns__left {
  width: 53px;
  height: 53px;
  background-image: url("/icons/left.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.scroller-btns__right {
  width: 53px;
  height: 53px;
  background-image: url("/icons/right.svg");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
