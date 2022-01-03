<template>
  <Header v-on:toggle.prevent="expanOrCollapseMenu" />
  <NavBar v-bind:toggle="expanOrCollapse" />
  <main class="mt-14 ml-14">
    <router-view />
  </main>
  <Toast position="top-right" group="message" />
</template>
<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  data: function () {
    return {
      expanOrCollapse: false,
    };
  },
  computed: {
    ...mapState(["toasterMessage", "isUserLoggedIn"]),
  },
  methods: {
    expanOrCollapseMenu: function () {
      this.expanOrCollapse = !this.expanOrCollapse;
    },
  },
  watch: {
    toasterMessage(newMessage, oldMessage) {
      const message = { ...(newMessage || oldMessage) };
      message.group = "message";
      message.life = 3000;
      this.$toast.add(message);
    },
    isUserLoggedIn(newFlag) {
      if (newFlag) {
        this.$router.push({ path: "/" });
      }
    },
  },
  components: {
    Header,
    NavBar,
  },
};
</script>