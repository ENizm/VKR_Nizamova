<template>
  <div class="work__list-item-icon" :class="{
      'work__list-item-icon_fill': fill
    }" @mouseover="focus = true" @mouseleave="focus = false">
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M2.56683 27.3969C1.89403 26.731 1.87253 25.6302 2.51883 24.9381L21.8036 4.28922L2.55043 4.56821C1.61763 4.58171 0.850029 3.81421 0.836129 2.85391C0.822229 1.89371 1.56723 1.10422 2.50003 1.09072L27.4904 0.728516L27.8633 26.454C27.8772 27.4143 27.1323 28.2037 26.1994 28.2172C25.2665 28.2307 24.499 27.4632 24.4851 26.5029L24.1988 6.74492L4.95533 27.3496C4.30903 28.0416 3.23963 28.0628 2.56683 27.3969Z"
            :fill="fill ? focus ? 'black' : fill : 'black'"/>
    </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ref} from "vue";

export default defineComponent({
  name: "LinkBtn",
  props: {
    fill: {
      required: false,
      type: String,
    }
  },
  setup() {
    const focus = ref<boolean>(false);

    return {
      focus,
    }
  }
})
</script>

<style>
.work__list-item-icon {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
}

.work__list-item-icon:hover {
  background-color: #FFFFFF;
  transition: .3s;
}

.work__list-item-icon svg {
  transition: .3s;
}

.work__list-item-icon:hover svg {
  transform: rotate(180deg);
  transition: .3s;
}
</style>
