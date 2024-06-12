<template>
  <section class="stack">
    <div class="stack-wrapper">
      <div class="stack__title">Наш <span>стек</span> технологий</div>
      <div class="stack__text">Все необходимые специалисты в нашем штате: от арт-директора до тестировщика. Мы нанимаем
        лучших специалистов на рынке. Это дорого, но результат того стоит.
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Stack",
})
</script>
<style>
.stack {
  background-image: url("public/icons/stack.svg");
  background-size: contain;
  background-position: center;
}

.stack-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: inherit;
}

.stack__title {
  font-weight: 300;
  font-size: 100px;
  line-height: 120px;
  letter-spacing: -3px;
}

.stack__title span {
  font-weight: 700;
}

.stack__text {
  width: 740px;
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  line-height: 48px;
}
</style>
