<template>
  <div class="flex items-center dark:bg-gray-50">
    <div
      class="
        card
        w-full
        m-auto
        dark:bg-gray-800
        px-4
        py-2
        rounded-sm
        mt-20
        md:w-1/4
      "
    >
      <h3 class="dark:text-white text-center text-xl">Login</h3>
      <div class="p-fluid">
        <div class="p-field">
          <label for="username" class="dark:text-white">Username</label>
          <InputText type="text" class="p-inputtext-sm" v-model="username" />
        </div>
        <div class="p-field">
          <label for="password" class="dark:text-white">Password</label>
          <InputText type="text" class="p-inputtext-sm" v-model="password" />
        </div>
        <div class="p-field">
          <Button label="Submit" v-on:click.prevent="login" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
</style>