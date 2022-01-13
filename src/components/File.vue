<template>
  <div class="px-4 py-4 w-80">
    <Image :src="url" :alt="name" preview />
  </div>
</template>
<script>
import { file } from "@/api";

export default {
  data: function () {
    return {
      url: "",
      name: "",
    };
  },
  props: {
    data: Object,
  },
  mounted: function () {
    this.url = URL.createObjectURL(this.data);
    this.name = this.data.name;
    this.uploadFile();
  },
  methods: {
    uploadFile() {
      const formData = new FormData();
      formData.append("file", this.data);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      file
        .upload(formData, config)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(({ response: { data } }) => {
          console.log(data);
        });
    },
  },
};
</script>
