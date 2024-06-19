<template>
  <section class="main__page-about2">
    <div class="main__page-about2-header">
      <div class="main__page-about2-header-title">
        <span>Чем мы</span> занимаемся
      </div>
      <div class="main__page-about2-header-text">
        Полный цикл услуг по разработке продуктов: от <span>идеи</span>
        до <span>запуска</span> успешного проекта
      </div>
    </div>
    <ul class="divisions" @mouseleave="selected = null">
      <template
          v-for="item in division"
          :key="item.icon"
      >
        <li
            v-if="selected?.icon === item.icon || !selected"
            class="divisions__item"
            :style="{backgroundImage: `url(/icons/${item.icon}.svg`}"
            @mouseover="select(item)"
        />
      </template>
      <transition>
        <li v-if="selected" class="divisions__description">
          <div class="divisions__description-title">{{ selected.title }}</div>
          <div class="divisions__description-text">{{ selected.text }}</div>
          <ul class="divisions__description-labels">
            <li v-for="label in selected.labels" :key="label" class="divisions__description-labels-item">{{
                label
              }}
            </li>
          </ul>
        </li>
      </transition>
    </ul>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {division, type Division} from "./types.ts";

export default defineComponent({
  name: "Services",
  setup: () => {
    const selected = ref<Division | null>(null);

    function select(division: Division) {
      selected.value = division;
    }

    return {
      division,
      selected,
      select,
    }
  }
})
</script>

<style>
.main__page-about2 {
  margin-right: 200px;
  margin-left: 200px;
}

.main__page-about2-header {
  padding-top: 100px;
  margin-bottom: 131px;
}

.main__page-about2-header-title {
  font-weight: 300;
  font-size: 100px;
  line-height: 120px;
  text-align: center;
  margin-bottom: 52px;
}

.main__page-about2-header-title span {
  font-weight: 700;
}

.main__page-about2-header-text {
  font-weight: 300;
  line-height: 70px;
  text-align: center;
  font-size: 59px;
}

.main__page-about2-header-text span {
  color: #F65700;
}

.divisions {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 28px;
}

.divisions__item {
  width: 312px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  flex: 0 0 auto;
}

.divisions__description {
  border-radius: 30px;
  background-color: #E8E8E8;
  padding: 78px 71px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}

.divisions__description-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
}

.divisions__description-text {
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
}

.divisions__description-labels {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.divisions__description-labels-item {
  padding: 18px 46px;
  border: 1px solid #f65700;
  border-radius: 200px;
  color: #f65700;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}

.v-enter-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to,
.v-leave-active {
  opacity: 0;
}
</style>
