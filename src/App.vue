<template>
  <Header v-on:toggle.prevent="expanOrCollapseMenu" />
  <NavBar v-bind:toggle="expanOrCollapse" />
  <main class="mt-14 ml-14">
    <router-view />
  </main>
</template>
<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  data: function () {
    return {
      expanOrCollapse: false,
    };
  },
  methods: {
    expanOrCollapseMenu: function () {
      this.expanOrCollapse = !this.expanOrCollapse;
    },
  },
  components: {
    Header,
    NavBar,
  },
};
</script>