<template>
  <section class="main__page-home">
    <div class="main__page-home-text">Проектирование, разработка и <br/> поддержка <br/> индивидуальных решений для
      цифровизации
      бизнеса
    </div>
    <div class="main__page-home-footer">
      <button class="main__page-home-footer-button" @click="$router.push(routingMap.form.path)">СТАТЬ КЛИЕНТОМ
      </button>
      <div class="main__page-home-footer-icon" @click="handleOpenTadViser"/>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {routingMap} from "../../../router.ts";

export default defineComponent({
  name: "Home",
  setup: () => {
    function handleOpenTadViser() {
      window.open('https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%9F%D0%9E:_%D0%B4%D1%80%D0%B0%D0%B9%D0%B2%D0%B5%D1%80%D1%8B%2C_%D0%BF%D1%80%D0%B5%D0%BF%D1%8F%D1%82%D1%81%D1%82%D0%B2%D0%B8%D1%8F_%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B')
    }

    return {
      handleOpenTadViser,
      routingMap,
    }
  }
})
</script>
<style>
.main__page-home {
  position: relative;
  background-color: #F65700;
  padding: 0 156px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/tages.png");
  background-size: 100%;
}

.main__page-home-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: 500;
  line-height: 120px;
  text-align: center;
  color: #FFFFFF;
  letter-spacing: -3px;
}

.main__page-home-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 104px;
  left: 156px;
  right: 156px;
  gap: 10px
}

.main__page-home-footer-button {
  flex: 1 1 auto;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 200px;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 16px;
  padding: 18px;
  transition: .3s;
}

.main__page-home-footer-button:hover {
  background-color: #FFFFFF;
  transition: .3s;
  color: #F65700;
}

.main__page-home-footer-icon {
  flex: 0 1 auto;
  width: 248px;
  height: 63px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/icons/top.svg");
  background-size: 100%;
}
</style>
