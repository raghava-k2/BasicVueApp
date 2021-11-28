<template>
  <Header />
  <NavBar />
  <main class="mt-14 ml-14">
    <router-view />
  </main>
</template>
<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    Header,
    NavBar,
  },
};
</script>