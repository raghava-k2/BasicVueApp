<template>
  <div
    class="
      px-2
      py-2
      md:w-60
      w-80
      border-solid border-color border-4
      mx-2
      my-2
      relative
      file-container
    "
  >
    <div class="flex flex-col flex-wrap justify-center items-center">
      <div class="header-image">
        <Image :src="url" :alt="name" preview class="header-image" />
      </div>
      <div class="truncate w-full text-center text-blue-900">
        <span :title="name">{{ name }}</span>
      </div>
    </div>
    <div
      class="absolute flex justify-center items-center inset-0"
      v-if="blockUser"
    >
      <BlockUI
        class="flex justify-center items-center w-full h-full"
        :blocked="blockUser"
        :autoZIndex="false"
      >
        <ProgressSpinner class="h-12 w-12" strokeWidth="5" v-if="!isReupload" />
        <Button
          icon="pi pi-replay"
          class="p-button-rounded z-10"
          v-if="isReupload"
          @click="callEitherDownloadOrUpload"
        />
      </BlockUI>
    </div>
  </div>
</template>
<script lang="ts">
import { file } from "../api";

export default {
  data: function () {
    return {
      url: "",
      name: "",
      blockUser: false,
      isReupload: false,
    };
  },
  props: {
    data: Object,
  },
  mounted: function () {
    if (!this.data.fileId) {
      this.url = URL.createObjectURL(this.data);
      this.name = this.data.name;
      this.uploadFile();
    } else {
      this.name = this.data.originalName;
      this.downloadFile();
    }
  },
  methods: {
    callEitherDownloadOrUpload() {
      if (this.data.fileId) {
        this.downloadFile();
      } else {
        this.uploadFile();
      }
    },
    uploadFile() {
      this.blockUser = true;
      this.isReupload = false;
      const formData = new FormData();
      formData.append("file", this.data);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      file
        .upload(formData, config)
        .then(() => {
          this.blockUser = false;
        })
        .catch(({ response: { data } }) => {
          console.log("error : ", data);
          this.blockUser = true;
          this.isReupload = true;
        });
    },
    downloadFile() {
      this.blockUser = true;
      this.isReupload = false;
      file
        .download(this.data.fileId)
        .then(({ data }) => {
          this.blockUser = false;
          this.url = `data:image/jpg;base64,${data.content}`;
        })
        .catch(({ response: { data } }) => {
          console.log(data);
          this.blockUser = true;
          this.isReupload = true;
        });
    },
  },
};
</script>

<style scoped>
.file-container {
  min-height: 18.75rem;
  max-height: 18.75rem;
  overflow: hidden;
}

.header-image {
  height: 15.625rem;
  overflow: hidden;
}

.border-color {
  border-color: #bce8f1;
}

.p-blockui.p-component-overlay {
  z-index: 1 !important;
}
</style>