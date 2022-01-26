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
    <File v-for="item of fileArray" :key="item.fileId" :data="item" />
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
      <ProgressSpinner strokeWidth="5" v-if="blockUser"/>
    </BlockUI>
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
    blockUser: false,
  }),
  mounted: function () {
    this.getFiles();
  },
  methods: {
    getFiles() {
      const { page, rows } = this;
      this.blockUser = true;
      file
        .get({ page, size: rows })
        .then(({ data }) => {
          this.fileArray = data.rows;
          this.blockUser = false;
        })
        .catch(({ response: { data } }) => {
          this.blockUser = false;
          console.log("error : ", data);
        });
    },
  },
  components: {
    File,
  },
};
</script>