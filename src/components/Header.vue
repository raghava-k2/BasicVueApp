<template>
  <header class="cac-header dark:bg-gray-900">
    <div class="flex flex-row w-full items-center">
      <div class="w-1/5 flex items-center">
        <Button
          v-bind:icon="expand ? 'pi pi-times' : 'pi pi-bars'"
          class="p-button-rounded p-button-text mr-2"
          v-on:click.prevent="
            this.expand = !this.expand;
            $emit('toggle', $event);
          "
        />
        <h1 class="text-black dark:text-white">
          {{ companyTitle }}
        </h1>
      </div>
      <div class="w-4/5 text-right">
        <User />
      </div>
    </div>
  </header>
</template>
<script>
import User from "@/components/user/User.vue";
export default {
  name: "Header",
  data: function () {
    return {
      companyTitle: "My-Files",
      expand: false,
    };
  },
  methods: {
    login: function () {
      this.$router.push({ path: "login" });
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
