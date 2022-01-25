<template>
  <div
    class="flex flex-row flex-wrap justify-center items-center md:justify-center"
  >
    <File v-for="item of files" :key="item.name" :data="item" />
    <File v-for="item of fileArray" :key="item.fileId" :data="item" />
  </div>
</template>

<script>
import File from "@/components/File.vue";
import { file } from "@/api";

export default {
  props: {
    files: Array,
  },
  data: () => ({
    page: 0,
    rows: 50,
    fileArray: [],
  }),
  mounted: function () {
    this.getFiles();
  },
  methods: {
    getFiles() {
      const { page, rows } = this;
      file
        .get({ page, size: rows })
        .then(({ data }) => {
          this.fileArray = data.rows;
        })
        .catch(({ response: { data } }) => {
          console.log("error : ", data);
        });
    },
  },
  components: {
    File,
  },
};
</script>