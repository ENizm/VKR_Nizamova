<template>
  <section class="articles">
    <div class="articles__header">
      <div class="articles__header-title">У нас есть, —</div>
      <div class="articles__header-description">
        <div class="articles__header-description-btns">
          <div class="articles__header-description-btns-item">
            <div class="articles__header-description-btns-text">видео на</div>
            <div class="articles__header-description-btns-icon youtube"/>
          </div>
          <div class="articles__header-description-btns-item">
            <div class="articles__header-description-btns-text">жизнь в</div>
            <div class="articles__header-description-btns-icon telegram"/>
          </div>
        </div>
        <div class="articles__header-text">что <span>рассказать</span></div>
      </div>
    </div>
    <ul class="articles-list">
      <li v-for="(article, id) in ArticlesList" :key="id" class="articles-list__item" :id="article.id">
        <div class="articles-list__item-card">
          <div class="articles-list__item-card-header">
            <div class="articles-list__item-card-header-icon1" :style="{
              backgroundImage: `url(src/assets/icons/${article.icon}.svg)`
            }"/>
            <div class="articles-list__item-card-header-author" :style="{
              backgroundImage: `url(src/assets/icons/${article.author}.svg)`
            }"/>
          </div>
          <div class="articles-list__item-card-title">{{ article.title }}</div>
          <div class="articles-list__item-card-text">
            {{ article.text }}
          </div>
        </div>
        <div class="articles-list__item-footer">
          <div class="articles-list__item-footer-wrapper">
            <div v-for="label in article.labels" :key="label" class="articles-list__item-footer-labels">{{
                label
              }}
            </div>
          </div>
          <LinkBtn class="articles-list__item-footer-btn" fill="white"/>
        </div>
      </li>
    </ul>
    <ScrollerBtns class="articles-scroller" @left="scrollIntoView(true)" @right="scrollIntoView"/>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {ArticlesList} from "./types.ts";
import LinkBtn from "../../../../components/link-btn.vue";
import ScrollerBtns from "../../../../components/scroller-btns.vue";
import {Article} from "./types.ts";

export default defineComponent({
  name: "Articles",
  components: {ScrollerBtns, LinkBtn},
  setup: () => {
    const inView = ref<Article>(ArticlesList[1]);

    onMounted(() => {
      const article = document.querySelector("#" + inView.value.id);
      if (article) {
        article.scrollIntoView({
          inline: "center",
        });
      }
    })

    function scrollIntoView(isLeft = false) {
      const currentIndex = ArticlesList.findIndex((article) => article.id === inView.value.id);
      if (isLeft && ArticlesList[currentIndex - 1]) {
        inView.value = ArticlesList[currentIndex - 1]
      }
      if (!isLeft && ArticlesList[currentIndex + 1]) {
        inView.value = ArticlesList[currentIndex + 1]
      }
      const review = document.querySelector("#" + inView.value.id);
      if (review) {
        review.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "nearest",
        });
      }
    }

    return {
      ArticlesList,
      scrollIntoView,
    }
  }
})
</script>

<style>
.articles__header {
  width: 1608px;
  margin: 0 auto 10px auto;
}

.articles__header-title {
  padding-top: 39px;
  font-weight: 300;
  font-size: 200px;
  line-height: 240px;
  letter-spacing: -3px;
}

.articles__header-description {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.articles__header-description-btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.articles__header-description-btns-item {
  padding: 17px 33px;
  border-radius: 84px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
}

.articles__header-description-btns-text {
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
}

.articles__header-description-btns-icon {
  height: 17px;
  width: 24px;
  background-position: center;
  background-repeat: no-repeat;
}

.youtube {
  background-image: url("src/assets/icons/youtube.svg");
}

.telegram {
  background-image: url("src/assets/icons/telegram.svg");
}

.articles__header-text {
  font-weight: 300;
  font-size: 100px;
  line-height: 120px;
  letter-spacing: -3px;
}

.articles__header-text span {
  font-style: italic;
  color: #f65700;
}

.articles-list {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  overflow: auto;
  gap: 20px;
}

.articles-list__item {
  width: 630px;
  flex: 0 0 auto;
}

.articles-list__item-card {
  border-radius: 20px;
  background-image: url("src/assets/icons/article-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  padding: 14px 20px;
  height: 546px;
  position: relative;
}

.articles-list__item-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.articles-list__item-card-header-icon1 {
  width: 105px;
  height: 59px;
  background-position: center;
  background-repeat: no-repeat;
}

.articles-list__item-card-header-author {
  width: 74px;
  height: 74px;
  background-repeat: no-repeat;
  background-position: center;
}

.articles-list__item-card-title {
  width: 502px;
  font-weight: 700;
  font-size: 30px;
  line-height: 31px;
}

.articles-list__item-card-text {
  background-color: #FFFFFF;
  border-radius: 37px;
  padding: 39px 78px;
  position: absolute;
  bottom: 34px;
  left: 34px;
  right: 34px;
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
}

.articles-list__item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.articles-list__item-footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}

.articles-list__item-footer-labels {
  border-radius: 84px;
  border: 1px solid #000000;
  padding: 18px 20px;
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
}

.articles-list__item-footer-btn {
  background-color: #000000;
}

.articles-scroller {
  margin-top: 10px;
}
</style>
