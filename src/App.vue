<template>
  <div class="app">
    <Header />
    <Navbar />
    <Modal />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Navbar from "@/components/Sidebar/Sidebar";
import Modal from "@/components/Modal/Modal";
import MainPage from "@/pages/Main/Main";
import "./styles/index.scss";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    MainPage,
    Modal,
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
  padding: 20px 20px;
}

::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  background-color: var(--bg-grey);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--bg-grey-light);
  border-radius: 10px;

  &:hover {
    background-color: var(--color-primary);
  }
}
</style>
