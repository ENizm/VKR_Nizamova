<template>
  <section class="work">
    <div class="work__title"><span class="work__title_bold">Как</span> устроена работа</div>
    <ul class="work__list">
      <li v-for="i in workList" :key="i.icon" class="work__list-item" :style="{
        backgroundImage: `url(/icons/${i.icon}.svg)`
      }">
        <LinkBtn class="work__list--icon"/>
        <div class="work__list-item-description">
          <div class="work__list-item-description-title">{{ i.title }}</div>
          <div class="work__list-item-description-text">{{ i.text }}</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {workList} from "./types.ts";
import LinkBtn from "../../../../components/link-btn.vue";

export default defineComponent({
  name: "Work",
  components: {LinkBtn},
  setup: () => {
    return {
      workList,
    }
  }
})
</script>

<style>
.work__title {
  padding-top: 99px;
  padding-bottom: 37px;
  font-weight: 300;
  font-size: 100px;
  line-height: 120px;
  letter-spacing: -3px;
  text-align: center;
}

.work__title_bold {
  font-weight: 700;
}

.work__list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;
  flex-wrap: wrap;
  width: 1555px;
  margin: 0 auto;
}

.work__list-item {
  width: 760px;
  height: 547px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 57px 74px;
  position: relative;
}

.work__list-item-description {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  gap: 24px;
}

.work__list-item-description-text {
  width: 429px;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
}

.work__list-item-description-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 38px;
  letter-spacing: -3px;
  color: #f65700;
}

.work__list--icon {
  position: absolute;
  top: 37px;
  right: 20px;
  background-color: #f65700;
}
</style>
