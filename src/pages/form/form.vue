<template>
  <div class="form">
    <Header class="form__header" @main="goToMain" @blog="goToBlog" @clients="goToClients" @stack="goToStack"/>
    <div class="form__content">
      <div class="form__content-left">
        <div class="form__content-left-title">Есть идея?</div>
        <div class="form__content-left-subtitle">Поделитесь ей с нами.</div>
        <div class="form__content-left-title-text">Подписывайтесь на нас:</div>
        <ul class="form__content-left-social">
          <li
              v-for="item in socialNetworks"
              :key="item.icon"
              class="form__content-left-social-item"
              :style="{ backgroundImage: `url(/icons/${item.icon}.svg)` }"
              @click="openNetwork(item.link)"
          />
        </ul>
        <div class="form__content-left-title-text">Связаться с нами:</div>
        <div class="form__content-left-link">jump@tages.ru</div>
      </div>
      <div class="form__content-right">
        <div class="form__content-right-about">
          <div class="form__content-right-about-name">
            <div class="form__content-right-about-name-title">Имя & компания</div>
            <input class="form__content-right-about-name-input" placeholder="Джон из Apple"/>
          </div>
          <div class="form__content-right-about-mail">
            <div class="form__content-right-about-name-title">Ваша почта</div>
            <input class="form__content-right-about-name-input" placeholder="jhon@apple.com"/>
          </div>
        </div>
        <div class="form__content-right-interested">
          <div class="form__content-right-interested-title">Я заинтересован в ...</div>
          <ul class="form__content-right-interested-list">
            <li v-for="item in interestedList" :key="item" class="form__content-right-interested-list-item" :class="{
              'form__content-right-interested-list-item_active': selectedInterested === item
            }" @click="selectInterested(item)">{{ item }}
            </li>
          </ul>
        </div>
        <div class="form__content-right-interested">
          <div class="form__content-right-interested-title">Бюджет проекта (RUS)</div>
          <ul class="form__content-right-interested-list">
            <li v-for="item in budgetList" :key="item" class="form__content-right-interested-list-item" :class="{
              'form__content-right-interested-list-item_active': selectedBudget === item
            }" @click="selectBudget(item)">{{ item }}
            </li>
          </ul>
        </div>
        <div class="form__content-right-interested-title">Расскажите нам больше о вашем проекте</div>
        <input class="form__content-right-about-name-input" placeholder="Что-то о вашей идеи"/>
      </div>
    </div>
    <div class="form__btn">Отправить</div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Header from "../../components/header.vue";
import {socialNetworks, interestedList, budgetList} from "./types.ts";
import {useRouter} from "vue-router";
import {routingMap} from "../../router.ts";

export default defineComponent({
  name: "Form",
  components: {Header},
  setup: () => {
    const selectedInterested = ref<string>("");
    const selectedBudget = ref<string>("");
    const router = useRouter();

    function openNetwork(link: string) {
      window.open(link, "_blank")
    }

    function selectInterested(value: string) {
      selectedInterested.value = value;
    }

    function selectBudget(value: string) {
      selectedBudget.value = value;
    }

    function goToMain() {
      router.push(routingMap.main.path)
    }

    function goToClients() {
      router.push(routingMap.main.path).then(() => {
        setTimeout(() => {
          const clients = document.querySelector("#reviews")
          if (clients) {
            clients.scrollIntoView({
              inline: "center",
              behavior: "smooth",
            })
          }
        })
      })
    }

    function goToStack() {
      router.push(routingMap.main.path).then(() => {
        setTimeout(() => {
          const clients = document.querySelector("#stack")
          if (clients) {
            clients.scrollIntoView({
              inline: "center",
              behavior: "smooth",
            })
          }
        })
      })
    }

    function goToBlog() {
      router.push(routingMap.main.path).then(() => {
        setTimeout(() => {
          const blog = document.querySelector("#blog")
          if (blog) {
            blog.scrollIntoView({
              inline: "center",
              behavior: "smooth",
            })
          }
        })
      })
    }

    return {
      selectedInterested,
      selectedBudget,
      socialNetworks,
      interestedList,
      budgetList,
      openNetwork,
      selectInterested,
      selectBudget,
      goToMain,
      goToClients,
      goToStack,
      goToBlog,
    }
  }
})
</script>
<style>
.form {
  width: 1100px;
  margin: 0 auto;
}

.form__header {
  width: 100%;
  padding: 0;
  margin-top: 22px;
  margin-bottom: 95px;
}

.form__header .header__company-menu-btn {
  display: none;
}

.form__header .header__company-name {
  background-image: url("/icons/tages-full-logo.svg");
  width: 79px;
  height: 72px;
  background-repeat: no-repeat;
  background-position: center;
}

.form__content {
  display: flex;
  gap: 50px;
}

.form__content-left-title {
  font-weight: 500;
  font-size: 60px;
  line-height: 60px;
}

.form__content-left-subtitle {
  font-weight: 300;
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 75px;
}

.form__content-left-title-text {
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 15px;
}

.form__content-left-social {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 50px;
}

.form__content-left-social-item {
  cursor: pointer;
  width: 55px;
  height: 55px;
  background-position: center;
  background-repeat: no-repeat;
}

.form__content-left-link {
  font-weight: 300;
  font-size: 19px;
  line-height: 26px;
}

.form__content-left {
  flex: 1 1 auto;
}

.form__content-right {
  width: 700px;
  flex: 0 0 auto;
}

.form__content-right-about {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 76px;
}

.form__content-right-about-name-title {
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 15px;
}

.form__content-right-about-name, .form__content-right-about-mail {
  flex: 1 1 auto;
}

.form__content-right-about-name-input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e1e1e1;
}

.form__content-right-interested-title {
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 30px;
}

.form__content-right-interested-list {
  display: flex;
  gap: 20px;
}

.form__content-right-interested-list-item {
  cursor: pointer;
  padding: 22px 27px;
  border: 1px solid #e8e8e8;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  border-radius: 90px;
  min-width: 117px;
  text-align: center;
}

.form__content-right-interested-list-item_active {
  border: 1px solid #f65700;
}

.form__content-right-interested {
  margin-bottom: 41px;
}

.form__btn {
  margin: 76px auto;
  width: 130px;
  padding: 18px;
  border: 1px solid #f65700;
  border-radius: 200px;
  color: #f65700;
  cursor: pointer;
  transition: .3s;
}

.form__btn:hover {
  background-color: #f65700;
  color: #FFFFFF;
  transition: .3s;
}
</style>
