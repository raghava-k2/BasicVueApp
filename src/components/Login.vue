<template>
  <div class="flex items-start justify-center dark:bg-gray-50 login-container">
    <div class="card w-full dark:bg-gray-800 px-4 py-2 rounded-sm md:w-1/4">
      <h3 v-if="error.show">{{ error.message }}</h3>
      <h3 class="dark:text-white text-center text-xl">Login</h3>
      <div class="p-fluid">
        <div class="p-field">
          <label for="username" class="dark:text-white">Username</label>
          <InputText type="text" v-model="username" />
        </div>
        <div class="p-field">
          <label for="password" class="dark:text-white">Password</label>
          <InputText type="text" v-model="password" />
        </div>
        <div class="p-field">
          <Button label="Submit" v-on:click.prevent="loginUser" />
        </div>
        <div class="p-field text-right">
          <router-link
            to="/signup"
            class="flex items-center text-blue-900 dark:text-blue-400"
            exact
          >
            <span class="flex-1 ml-5">Sign up</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions } from "vuex";
export default {
  data: function () {
    return {
      username: "",
      password: "",
      error: { show: false, message: "" },
    };
  },
  methods: {
    loginUser() {
      const { username, password } = this;
      this.login({ username, password });
    },
    ...mapActions(["login"]),
  },
};
</script>
<style scoped>
.login-container {
  height: calc(100vh - 50px);
}
</style>