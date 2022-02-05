<template>
  <Header v-on:toggle.prevent="expanOrCollapseMenu" />
  <NavBar v-bind:toggle="expanOrCollapse" />
  <main class="mt-14 ml-14">
    <router-view />
  </main>
  <BlockUI
    class="!flex !justify-center !items-center !w-full !h-full !absolute !inset-0"
    :blocked="blockUserAppLevel"
    v-if="blockUserAppLevel"
  >
    <ProgressSpinner
      class="h-12 w-12"
      strokeWidth="5"
      v-if="blockUserAppLevel"
    />
  </BlockUI>
  <Toast position="top-right" group="message" />
</template>
<script lang="ts">
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  data: function () {
    return {
      expanOrCollapse: false,
    };
  },
  computed: {
    ...mapState(["toasterMessage", "isUserLoggedIn", "blockUserAppLevel"]),
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