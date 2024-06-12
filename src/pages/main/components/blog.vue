<template>
  <section class="blog">
    <div class="blog__title">
      <marquee scrollamount="40" truespeed>ДАВАЙТЕ НАЧНЕМ РАБОТУ</marquee>
    </div>
    <div class="blog__content">
      <div class="blog__content-left">
        <div class="blog__content-left-text">Расскажите нам о своем проекте, задаче, идее, сроках, а мы составим
          предложение
        </div>
        <div class="blog__content-left-mail">jump@tages.ru</div>
      </div>
      <div class="blog__content-spacer"/>
      <div class="blog__content-right">
        <div class="blog__content-right-text" @click="$router.push(routingMap.form.path)">ЗАПОЛНИТЬ <br/>БРИФ</div>
      </div>
    </div>
    <div class="blog__footer">
      <div class="blog__footer-1">
        <div class="blog__footer-logo"/>
        <div class="blog__footer-logo-text">© 2012-2024 TAGES</div>
      </div>
      <div class="blog__footer-2">
        <div class="blog__footer-2-text">Уфа</div>
        <div class="blog__footer-2-text">50-лет Октября, 13/2</div>
      </div>
      <div class="blog__footer-3">
        <div class="blog__footer-3-tg" @click="open('https://t.me/tagesru')"/>
        <div class="blog__footer-3-vk" @click="open('https://vk.com/tagesru')"/>
        <div class="blog__footer-3-yt" @click="open('https://www.youtube.com/channel/UCBK5-lZpfKeu_yjH30DpvSQ')"/>
      </div>
      <div class="blog__footer-4">
        <div class="blog__footer-4-text item-olk">Политика конфиденциальности</div>
        <div class="blog__footer-4-subtext item-olk">pr@tages.ru</div>
        <div class="blog__footer-4-subtext item-olk">+7 (495) 640-23-94</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {routingMap} from "../../../router.ts";

export default defineComponent({
  name: "Blog",
  setup: () => {
    function open(link: string) {
      window.open(link, "_blank")
    }

    return {
      routingMap,
      open,
    }
  }
})
</script>

<style>
.blog {
  background-color: #f65700;
}

.blog__title {
  padding-top: 99px;
  font-size: 270px;
  line-height: 260px;
  font-weight: 300;
  border-bottom: 10px solid white;
}

.blog__content {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  height: 500px;
  border-bottom: 10px solid white;
}

.blog__content-left, .blog__content-right {
  flex: 0 0 calc(50% - 3px);
}

.blog__content-spacer {
  width: 6px;
  background-color: #FFFFFF;
}

.blog__content-left {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.blog__content-left-text {
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  width: 400px;
}

.blog__content-left-mail {
  font-weight: 300;
  font-size: 19px;
  color: #2D2D2D;
  height: 130px;
}

.blog__content-right {
  position: relative;
}

.blog__content-right-text {
  height: 490px;
  width: 400px;
  background-color: #FFFFFF;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
}

.blog__footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
}

.blog__footer-1 {
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
}

.blog__footer-logo {
  background-image: url("public/icons/tages.svg");
  background-position: center;
  background-repeat: no-repeat;
  width: 85px;
  height: 17px;
}

.blog__footer-logo-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2D2D2D;
}

.blog__footer-2-text {
  font-weight: 300;
  font-size: 30px;
  line-height: 24px;
  color: #2D2D2D;
}

.blog__footer-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
}

.blog__footer-3-tg {
  height: 19px;
  width: 19px;
  background-image: url("public/icons/tg-s.svg");
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

.blog__footer-3-vk {
  height: 19px;
  width: 19px;
  background-image: url("public/icons/vk-s.svg");
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

.blog__footer-3-yt {
  height: 19px;
  width: 24px;
  background-image: url("public/icons/yt-s.svg");
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

.blog__footer-4 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog__footer-4-text {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #2D2D2D;
}

.blog__footer-4-subtext {
  color: #2D2D2D;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
}

.item-olk:not(:last-child) {
  padding-right: 6px;
  border-right: 1px solid #2D2D2D;
  margin-right: 6px;
}
</style>
