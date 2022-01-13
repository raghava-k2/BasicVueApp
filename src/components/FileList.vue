<template>
  <div class="flex flex-row flex-wrap justify-start items-center">
    <File v-for="item in files" :key="item.index" :data="item" />
  </div>
</template>
<script>
import File from "@/components/File.vue";

export default {
  props: {
    files: Array,
  },
  components: {
    File,
  },
};
</script>
