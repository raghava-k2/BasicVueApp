<template>
  <header class="cac-header dark:bg-gray-900">
    <div class="flex flex-row w-full items-center">
      <div class="w-2/5 md:w-1/5 flex items-center">
        <Button
          v-bind:icon="expand ? 'pi pi-times' : 'pi pi-bars'"
          class="p-button-rounded p-button-text mr-2"
          v-on:click.prevent="
            this.expand = !this.expand;
            $emit('toggle', $event);
          "
        />
        <h1 class="text-black dark:text-white w-full">
          {{ companyTitle }}
        </h1>
      </div>
      <div class="w-3/5 md:w-4/5 text-right">
        <Button
          v-bind:icon="theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'"
          class="p-button-rounded p-button-text"
          v-on:click.prevent="changeTheme"
        />
        <User />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import User from "../components/user/User.vue";
export default {
  name: "Header",
  data: function () {
    return {
      companyTitle: "My-Files",
      expand: false,
      theme: "light",
    };
  },
  mounted: function () {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      this.theme = "light";
      document.documentElement.classList.remove("dark");
    }
    this.changePrimeTheme();
  },
  methods: {
    login: function () {
      this.$router.push({ path: "login" });
    },
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        this.theme = "light";
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", this.theme);
      this.changePrimeTheme();
    },
    changePrimeTheme() {
      const linkTag =
        document.getElementById("prime-theme") || this.createLinkTag();
      if (this.theme === "light") {
        linkTag.href = "https://unpkg.com/primevue/resources/themes/lara-light-indigo/theme.css";
      } else {
        linkTag.href = "https://unpkg.com/primevue/resources/themes/lara-dark-indigo/theme.css";
      }
    },
    createLinkTag() {
      const linkTag = document.createElement("link");
      linkTag.setAttribute("id", "prime-theme");
      linkTag.setAttribute("rel", "stylesheet");
      document.head.append(linkTag);
      return linkTag;
    },
  },
  components: {
    User: User,
  },
};
</script>
<style lang="sass">
.cac-header
  position: fixed
  height: 3.5rem
  z-index: 1
  left: 0
  top: 0
  width: 100%
  padding: 0 0.4rem
  background-color: var(--surface-card)
  transition: left .2s
  display: flex
  align-items: center
  box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)
</style>
