<template>
  <section class="reviews">
    <div class="reviews__icon"/>
    <div class="reviews__text">Мы не любим говорить о себе.</div>
    <div class="reviews__text">Но мы не против, если это делают наши <span>клиенты</span></div>
    <ul class="reviews__list">
      <li v-for="review in companyReviews" :key="review.icon" class="reviews__list-item" :id="review.icon">
        <div class="reviews__list-item-director" :style="{
          backgroundImage: `url(public/icons/${review.icon}.svg)`
        }"/>
        <div class="reviews__list-item-text">
          <span v-for="(item, i) in review.text" :key="i" class="reviews__list-item-text-value" :class="{
            'reviews__list-item-text-value_active': item.isAccent
          }">{{ item.value }}</span>
        </div>
        <div class="reviews__list-item-name"><span class="reviews__list-item-name_active">{{
            review.name
          }}</span>{{ review.position }}
        </div>
        <div class="reviews__list-item-logo" :style="{
          backgroundImage: `url(public/icons/${review.logo}.svg)`
        }"/>
      </li>
    </ul>
    <ScrollerBtns class="reviews__btns" @left="scrollIntoView(true)" @right="scrollIntoView"/>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {companyReviews, ReviewItem} from "./types.ts";
import ScrollerBtns from "../../../../components/scroller-btns.vue";

export default defineComponent({
  name: "Reviews",
  components: {ScrollerBtns},
  setup: () => {
    const inView = ref<ReviewItem>(companyReviews[1]);

    onMounted(() => {
      const review = document.querySelector("#" + inView.value.icon);
      if (review) {
        review.scrollIntoView({
          inline: "center",
        });
      }
    })

    function scrollIntoView(isLeft = false) {
      const currentIndex = companyReviews.findIndex((review) => review.icon === inView.value.icon);
      if (isLeft && companyReviews[currentIndex - 1]) {
        inView.value = companyReviews[currentIndex - 1]
      }
      if (!isLeft && companyReviews[currentIndex + 1]) {
        inView.value = companyReviews[currentIndex + 1]
      }
      const review = document.querySelector("#" + inView.value.icon);
      if (review) {
        review.scrollIntoView({
          inline: "center",
          block: "nearest",
          behavior: "smooth",
        });
      }
    }

    return {
      companyReviews,
      scrollIntoView,
    }
  }
})
</script>

<style>
.reviews__icon {
  width: 1163px;
  height: 53px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("public/icons/companies.svg");
  margin: 99px auto 44px auto;
}

.reviews__text {
  font-weight: 300;
  font-size: 59px;
  line-height: 71px;
  text-align: center;
}

.reviews__text span {
  color: #f65700;
}

.reviews__list {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 34px;
  margin-top: 56px;
  overflow: auto;
}

.reviews__list-item {
  width: 780px;
  height: 645px;
  border-radius: 30px;
  border: 1px solid #969393;
  padding: 120px 40px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.reviews__list-item-director {
  width: 96px;
  height: 96px;
  background-position: center;
  background-repeat: no-repeat;
}

.reviews__list-item-text {
  text-align: center;
}

.reviews__list-item-text-value {
  font-weight: 300;
  font-size: 30px;
  line-height: 30px;
}

.reviews__list-item-text-value_active {
  font-style: italic;
  font-weight: 300;
  color: #8D8C8A;
}

.reviews__list-item-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #8D8C8A;
}

.reviews__list-item-name_active {
  font-weight: 700;
}

.reviews__list-item-logo {
  height: 36px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.reviews__btns {
  margin-top: 42px;
}
</style>
