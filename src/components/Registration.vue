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
        rounded-md
        mt-20
        md:w-1/4
      "
    >
      <h3 class="dark:text-white text-center text-xl">Registration</h3>
      <div class="p-fluid">
        <div class="p-field">
          <label for="username" class="dark:text-white">Username</label>
          <InputText
            id="username"
            type="text"
            class="p-inputtext-sm"
            v-model="username"
          />
        </div>
        <div class="p-field">
          <label for="password" class="dark:text-white">Password</label>
          <Password v-model="password" class="p-inputtext-sm">
            <template #header>
              <h6>Password Strength</h6>
            </template>
            <template #footer="sp">
              {{ sp.level }}
              <Divider />
              <p class="p-mt-2">Suggestions</p>
              <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
        </div>
        <div class="p-field">
          <label for="mailId" class="dark:text-white">Mail Id</label>
          <InputText
            id="mailId"
            type="email"
            class="p-inputtext-sm"
            v-model="email"
          />
        </div>
        <div class="p-field">
          <Button
            label="Register"
            class="p-button-sm"
            v-on:click.prevent="register"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Registration",
  data: function () {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register: function () {
      this.$store.dispatch("signup", {
        name: this.username,
        password: this.password,
        email: this.email,
      });
    },
  },
};
</script>