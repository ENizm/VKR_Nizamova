<template>
  <section class="main__page-about">
    <video autoplay muted loop class="main__page-about-video">
      <source src="../../../assets/tages12.mp4" type="video/mp4"/>
    </video>
    <div class="main__page-about-glass-overlay">
      <div class="main__page-about-glass-overlay-header">
        <div class="main__page-about-glass-overlay-header-icon"/>
        <div class="main__page-about-glass-overlay-header-text">ТАГЕСЕ</div>
      </div>
      <ul class="main__page-about-glass-overlay-text">
        <li class="main__page-about-glass-overlay-text-item">
          Мы верим в силу индивидуального подхода.
        </li>
        <li class="main__page-about-glass-overlay-text-item">
          На протяжении <span class="main__page-about-glass-overlay-text-item_active">12</span> лет по всему миру и в
          любой отрасли мы взаимодействуем с клиентами на любом этапе их развития, создаем для них новые решения и
          помогаем развиваться, экономя ресурсы.
        </li>
        <li class="main__page-about-glass-overlay-text-item">Наша команда, насчитывающая более <span
            class="main__page-about-glass-overlay-text-item_active">100</span> сотрудников, помогла более чем <span
            class="main__page-about-glass-overlay-text-item_active">2</span> стартапам и компаниям из списка <span
            class="main__page-about-glass-overlay-text-item_active">Forbes</span>.
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "About"
})
</script>

<style>
.main__page-about {
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
}

.main__page-about-video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

.main__page-about-glass-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 54%;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 57px;
}

.main__page-about-glass-overlay-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
}

.main__page-about-glass-overlay-header-icon {
  width: 143px;
  height: 140px;
  background-image: url("public/icons/logo.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.main__page-about-glass-overlay-header-text {
  font-weight: 500;
  font-size: 120px;
  line-height: 144px;
  color: #F65700;
  letter-spacing: -3px;
}

.main__page-about-glass-overlay-text {
  margin: 0 156px 0 89px;
}

.main__page-about-glass-overlay-text-item {
  font-size: 32px;
  font-weight: 300;
  line-height: 48px;
}

.main__page-about-glass-overlay-text-item_active {
  color: #F65700;
}

.main__page-about-glass-overlay-text-item:not(:last-child) {
  margin-bottom: 12px;
}
</style>
