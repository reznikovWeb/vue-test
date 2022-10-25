<template>
  <div class="app">
    <Header />
    <Navbar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Navbar from "@/components/Sidebar/Sidebar";
import MainPage from "@/pages/Main/Main";
import "./styles/index.scss";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    MainPage,
  },
  mounted() {
    if (localStorage.getItem("isClosed")) {
      const isClosed = localStorage.getItem("isClosed") === `true`;
      this.$store.commit("setIsClosed", { isClosed });
    }
  },
};
</script>

<style lang="scss">
.app {
  background-color: var(--bg-primary);
  color: var(--color-primary);
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";
  height: 100vh;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  overflow: hidden;
}

.content {
  grid-area: content;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 0 20px;
}
</style>
