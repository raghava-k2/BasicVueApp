<template>
  <div class="hello dark:bg-gray-100">
    <FileUpload
      name="fileUpload"
      class="p-button-sm"
      :multiple="true"
      :maxFileSize="1000000"
      chooseLabel="Browse"
      :customUpload="true"
      @uploader="onUpload"
    />
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  methods: {
    onUpload: function (e) {
      console.log(e);
    },
  },
};
</script>
<style scoped>
</style>
