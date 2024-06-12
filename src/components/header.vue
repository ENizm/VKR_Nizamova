<template>
  <header class="header">
    <div class="header__company-name"/>
    <ul class="header__company-nav">
      <li class="header__company-nav-item" @click="$emit('main')">Главная</li>
      <li class="header__company-nav-item" @click="$emit('clients')">Клиенты</li>
      <li class="header__company-nav-item" @click="$emit('stack')">Стек</li>
      <li class="header__company-nav-item" @click="$emit('blog')">Блог</li>
    </ul>
    <div class="header__company-menu">
      <button class="header__company-menu-btn" @click="$router.push(routingMap.form.path)">Поговорить</button>
      <button class="header__company-menu-redirect">
        <span class="header__company-menu-redirect-icon-item header__company-menu-redirect-icon-item_first"/>
        <span class="header__company-menu-redirect-icon-item header__company-menu-redirect-icon-item_second"/>
        <span class="header__company-menu-redirect-icon-item header__company-menu-redirect-icon-item_third"/>
      </button>
    </div>
  </header>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {routingMap} from "../router.ts";

export default defineComponent({
  name: "Header",
  setup: () => {
    return {
      routingMap,
    }
  },
  emits: ["main", "clients", "stack", "blog"]
})
</script>
<style>
.header {
  padding: 0 156px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
}

.header__company-name {
  width: 212px;
  height: 17px;
  background-image: url("public/icons/tages.svg");
  background-position: left;
  background-repeat: no-repeat;
}

.header__company-nav {
  width: 380px;
  padding: 18px 32px;
  background-color: #EB8E54;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
}

.header__company-nav-item {
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: #FFFFFF;
  cursor: pointer;
  transition: .3s;
}

.header__company-nav-item:hover {
  color: #F65700;
  transition: .3s;
}

.header__company-menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 36px;
}

.header__company-menu-btn {
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 200px;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  line-height: 16px;
  padding: 18px;
  transition: .3s;
}

.header__company-menu-btn:hover {
  background-color: #FFFFFF;
  transition: .3s;
  color: #F65700;
}

.header__company-menu-redirect {
  width: 53px;
  height: 53px;
  background-color: #000000;
  border-radius: 50%;
  border: none;
  position: relative;
}

.header__company-menu-redirect-icon-item {
  position: absolute;
  width: 17px;
  height: 1px;
  background-color: #FFFFFF;
  display: block;
  transform: translateX(-50%);
  left: 50%;
  transition: .3s;
}

.header__company-menu-redirect-icon-item_first {
  top: 20px;
}

.header__company-menu-redirect-icon-item_second {
  top: 25px;
}

.header__company-menu-redirect-icon-item_third {
  top: 30px;
}

.header__company-menu-redirect:hover
.header__company-menu-redirect-icon-item_first,
.header__company-menu-redirect:hover
.header__company-menu-redirect-icon-item_second,
.header__company-menu-redirect:hover
.header__company-menu-redirect-icon-item_third {
  top: 25px;
  transition: .3s;
}

.header__company-menu-redirect-icon-item:not(:last-child) {
  margin-bottom: 5px;
}
</style>
