<template>
  <div class="hello dark:bg-gray-100">
    <h1 class="dark:text-black">{{ msg }}</h1>
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
