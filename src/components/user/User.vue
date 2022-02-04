<template>
  <Button
    icon="pi pi-user"
    class="p-button-rounded p-button-text mr-2"
    @click="userIconClick"
  />
</template>
<script>
export default {
  methods: {
    userIconClick(e) {
      console.log(e);
    },
  },
};
</script>

