<template>
  <div
    class="
      flex flex-row flex-wrap
      justify-center
      items-center
      md:justify-center
    "
  >
    <File v-for="item of files" :key="item.name" :data="item" />
    <File
      v-for="item of fileArray"
      :key="item.fileId"
      :data="item"
      @delete="deletedFile"
    />
    <div
      v-if="!(files?.length || fileArray?.length) && !blockUser"
      class="my-12 text-center"
    >
      <h4 class="text-xl font-bold">No Files are present currently</h4>
      <h5 class="text-lg">
        Please use the above browse option to upload files
      </h5>
    </div>
    <BlockUI
      class="flex justify-center items-center w-full h-full"
      :blocked="blockUser"
      :autoZIndex="false"
    >
      <ProgressSpinner class="!h-12 !w-12" strokeWidth="5" v-if="blockUser" />
    </BlockUI>
  </div>
</template>

<script lang="ts">
import File from "../components/File.vue";
import { file } from "../api";

export default {
  props: {
    files: Array,
  },
  data: () => ({
    page: 0,
    rows: 50,
    sortField: "createdOn",
    sortOrder: -1,
    fileArray: [],
    blockUser: false,
  }),
  mounted: function () {
    this.getFiles();
  },
  methods: {
    getFiles() {
      const { page, rows, sortField, sortOrder } = this as any;
      this.blockUser = true;
      file
        .get({ page, size: rows, sortField, sortOrder })
        .then(({ data }) => {
          this.fileArray = data.rows;
          this.blockUser = false;
        })
        .catch(({ response: { data } }) => {
          this.blockUser = false;
          console.log("error : ", data);
        });
    },
    deletedFile({ fileId }) {
      const index = this.fileArray.findIndex((i) => i.fileId === fileId);
      this.fileArray.splice(index, 1);
    },
  },
  components: {
    File,
  },
};
</script>