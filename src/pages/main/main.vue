<template>
  <div class="main">
    <Header class="main__header" @main="goToMain" @blog="goToBlog" @clients="goToClients" @stack="goToStack"/>
    <Home class="main__page"/>
    <About class="main__page"/>
    <Services class="main__page"/>
    <Reviews class="main__page" id="reviews"/>
    <Work class="main__page work"/>
    <Stack class="main__page" id="stack"/>
    <Team class="main__page"/>
    <Articles class="main__page"/>
    <Offers class="main__page"/>
    <Blog class="main__page" id="blog"/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Header from "../../components/header.vue";
import Home from "./components/home.vue";
import About from "./components/about.vue";
import Services from "./components/services/services.vue";
import Reviews from "./components/reviews/reviews.vue";
import Work from "./components/work/work.vue";
import Stack from "./components/stack.vue";
import Team from "./components/team.vue";
import Articles from "./components/articles/articles.vue";
import Offers from "./components/offers/offers.vue";
import Blog from "./components/blog.vue";

export default defineComponent({
  name: "Main",
  components: {Header, Home, About, Services, Reviews, Work, Stack, Team, Articles, Offers, Blog},
  setup: () => {
    function goToMain() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    function goToClients() {
      const clients = document.querySelector("#reviews")
      if (clients) {
        clients.scrollIntoView({
          inline: "center",
          behavior: "smooth",
        })
      }
    }

    function goToStack() {
      const clients = document.querySelector("#stack")
      if (clients) {
        clients.scrollIntoView({
          inline: "center",
          behavior: "smooth",
        })
      }
    }

    function goToBlog() {
      const blog = document.querySelector("#blog")
      if (blog) {
        blog.scrollIntoView({
          inline: "center",
          behavior: "smooth",
        })
      }
    }

    return {
      goToMain,
      goToClients,
      goToStack,
      goToBlog,
    }
  }
})
</script>
<style>
.main__header {
  position: fixed;
  width: 100%;
  top: 21px;
  z-index: 4;
}

.main__page {
  height: 100vh;
  overflow: hidden;
}

.work {
  height: 1490px;
  overflow: visible;
}
</style>
