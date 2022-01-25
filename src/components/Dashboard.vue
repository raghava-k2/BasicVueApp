<template>
  <div class="hello dark:bg-gray-100">
    <FileUpload
      name="fileUpload"
      class="p-button-sm"
      :multiple="true"
      :maxFileSize="100000000"
      chooseLabel="Browse"
      :customUpload="true"
      @uploader="onUpload"
      ref="fileUpload"
    >
      <template #empty> Drag and drop files here to upload. </template>
    </FileUpload>
    <FileList :files="files" />
  </div>
</template>
<script>
import FileList from "@/components/FileList.vue";
export default {
  name: "HelloWorld",
  data: function () {
    return {
      files: [],
    };
  },
  methods: {
    onUpload: function ({ files }) {
      this.$refs.fileUpload.clear();
      this.files = [...files,...this.files];
    },
  },
  components: {
    FileList,
  },
};
</script>
<style scoped>
</style>
