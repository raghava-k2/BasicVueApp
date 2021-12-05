<template>
  <div class="hello dark:bg-gray-800">
    <h1 class="dark:text-white">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
</style>
