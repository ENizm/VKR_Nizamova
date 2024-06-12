<template>
  <section class="offers">
    <div class="offers-wrapper">
      <div class="offers__right">
        <div class="offers__right-title">Главное - это <span>люди</span></div>
        <div class="offers__right-text">Мы ценим свободу и комфорт каждого, даем возможность самовыражаться</div>
      </div>
      <div class="offers__left">
        <div v-for="(offer, id) in OffersList" :key="id" class="offers__left-item">
          <div class="offers__left-item-number">#{{ id + 1 }}</div>
          <div class="offers__left-item-description">
            <div class="offers__left-item-description-title">{{ offer.title }}</div>
            <ul class="offers__left-item-description-labels">
              <li v-for="label in offer.labels" :key="label" class="offers__left-item-description-labels-item">
                {{ label }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {OffersList} from "./types.ts";

export default defineComponent({
  name: "Offers",
  setup: () => {
    return {
      OffersList,
    }
  }
})
</script>

<style>
.offers {
  margin-right: 156px;
  margin-left: 156px;
}

.offers-wrapper {
  padding-top: 99px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.offers__right {
  width: 632px;
}

.offers__right-title {
  font-weight: 300;
  font-size: 100px;
  line-height: 120px;
  letter-spacing: -3px;
  margin-bottom: 38px;
}

.offers__right-title span {
  color: #f65700;
}

.offers__right-text {
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
}

.offers__left {
  width: 800px;
}

.offers__left-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
}

.offers__left-item-number {
  font-size: 32px;
  font-weight: 300;
  color: #f65700;
  line-height: 38px;
}

.offers__left-item-description-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #f65700;
  margin-bottom: 19px;
}

.offers__left-item-description-labels {
  display: flex;
  gap: 12px;
}

.offers__left-item-description-labels-item {
  border: 1px solid #f65700;
  border-radius: 84px;
  padding: 17px 70px;
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  color: #f65700;
}

.offers__left-item {
  padding: 17px 0 7px 0;
}

.offers__left-item:not(:last-child) {
  border-bottom: 1px solid #f65700;
}
</style>
