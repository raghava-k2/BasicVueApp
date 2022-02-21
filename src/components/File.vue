<template>
  <div
    class="
      px-2
      py-2
      md:w-60
      w-80
      border-solid border-color border
      mx-2
      my-2
      relative
      file-container
    "
  >
    <div class="flex flex-col flex-wrap justify-center items-center">
      <div class="header-actions absolute hidden w-full top-0 z-10">
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-text !text-white"
          @click="deleteFile"
        />
        <Button
          icon="pi pi-download"
          class="p-button-rounded p-button-text float-right !text-white"
          @click="downloadFileFromServer"
        />
      </div>
      <div class="header-image-container w-full">
        <i class="pi pi-file text-green-500 dark:text-orange-200" v-if="!/^image/.test(data.type)"></i>
        <Image :src="url" :alt="name" preview class="header-image w-full" v-if="/^image/.test(data.type)"/>
      </div>
      <div class="truncate w-full text-center text-blue-900 dark:text-white">
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
        <ProgressSpinner class="!h-12 !w-12" strokeWidth="5" v-if="!retry" />
        <Button
          icon="pi pi-replay"
          class="p-button-rounded z-10"
          v-if="retry"
          @click="callEitherDownloadOrUpload"
        />
      </BlockUI>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions } from "vuex";
import { file } from "../api";
import { saveAs } from "file-saver";

export default {
  data: function () {
    return {
      url: "",
      name: "",
      blockUser: false,
      retry: false,
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
      if (/^image/.test(this.data.type)) {
        this.downloadImage();
      }
    }
  },
  methods: {
    callEitherDownloadOrUpload() {
      if (this.data.fileId) {
        this.downloadImage();
      } else {
        this.uploadFile();
      }
    },
    uploadFile() {
      this.blockUser = true;
      this.retry = false;
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
        .catch(() => {
          this.blockUser = true;
          this.retry = true;
        });
    },
    downloadImage() {
      this.blockUser = true;
      this.retry = false;
      file
        .download(this.data.fileId)
        .then(({ data }) => {
          this.blockUser = false;
          this.url = `data:image/jpg;base64,${data.content}`;
        })
        .catch(() => {
          this.blockUser = true;
          this.retry = true;
        });
    },
    deleteFile() {
      this.blockUser = true;
      file
        .delete(this.data.fileId)
        .then(() => {
          this.$emit("delete", this.data);
          this.blockUser = false;
        })
        .catch(() => {
          this.addToasterMessage("Failed to delete file.Please retry again");
          this.blockUser = false;
        });
    },
    downloadFileFromServer() {
      const { fileId, originalName } = this.data;
      this.blockUser = true;
      this.retry = false;
      file
        .download(fileId)
        .then(({ data }) => {
          this.blockUser = false;
          const blob = this.base64StringToBlob(data.content);
          saveAs(blob, originalName);
        })
        .catch((e: any) => {
          this.addToasterMessage("Failed to download file.Please retry again");
          this.blockUser = true;
          this.retry = true;
        });
    },
    base64StringToBlob(base64String: any) {
      const byteArray = Uint8Array.from(
        atob(base64String)
          .split("")
          .map((char) => char.charCodeAt(0))
      );
      return new Blob([byteArray]);
    },
    ...mapActions(["addToasterMessage"]),
  },
};
</script>

<style scoped>
.file-container {
  min-height: 18.75rem;
  max-height: 18.75rem;
  overflow: hidden;
}

.file-container:hover .header-actions {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}

.header-image,
.header-image-container {
  height: 15.625rem;
  overflow: hidden;
}

.header-image-container > i{
  font-size: 180px;
}

:deep() .header-image > img {
  height: 100%;
  inline-size: 100%;
  object-fit: fill;
  aspect-ratio: 16/ 9;
}

.border-color {
  border-color: #bce8f1;
}
</style>