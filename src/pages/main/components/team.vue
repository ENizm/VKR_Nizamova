<template>
  <section class="team">
    <div class="team__content">
      <div class="team__content-header">
        <div class="team__content-header-text">
          <span>TAGES FAMILY</span> - команда профессионалов, которая воплощает все ваши идеи в красивые и удобные
          продукты, которые эффективно решают задачи бизнеса
        </div>
        <div class="team__content-header-tile">
          <div class="team__content-header-tile-right">12 +</div>
          <div class="team__content-header-tile-left">лет и статус ТОП-50 крупнейших поставщиков услуг по заказной
            разработке 2024
          </div>
        </div>
      </div>
      <ul class="team__peoples">
        <li v-for="people in teams" :key="people" class="team__peoples-item" :style="{
          backgroundImage: `url(src/assets/icons/${people}.svg)`
        }"/>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Team",
  setup: () => {
    const teams = ["dmitrii", "ekaterina", "margo", "ilia"]
    return {
      teams,
    }
  }
})
</script>

<style>
.team {
  display: flex;
  align-items: center;
  justify-content: center;
}

.team__content {
  width: 100%;
  background-color: #E7E7E7;
  padding: 154px 154px 63px 154px;
}

.team__content-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 71px;
  margin-bottom: 80px;
}

.team__content-header-text {
  flex: 0 1 auto;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  white-space: break-spaces;
  word-break: break-word;
}

.team__content-header-text span {
  font-weight: 700;
  color: #f65700;
}

.team__content-header-tile {
  flex: 0 0 auto;
  background-color: #FFFFFF;
  border-radius: 30px;
  box-shadow: 33px 101px 78px 0 #0000001A;
  padding: 58px 52px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 754px;
}

.team__content-header-tile-right {
  font-weight: 700;
  font-size: 105px;
  letter-spacing: -4px;
  line-height: 105px;
  flex: 0 0 auto;
}

.team__content-header-tile-left {
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
}

.team__peoples {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.team__peoples-item {
  width: 251px;
  height: 251px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
