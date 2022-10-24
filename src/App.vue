<template>
  <div class="app">
    <Header />
    <Navbar />
    <MainPage />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Navbar from "@/components/Sidebar/Sidebar";
import MainPage from "@/pages/MainPage/MainPage";
import "./styles/index.scss";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    MainPage,
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
  grid-template-columns: 200px 1fr;
}
</style>
