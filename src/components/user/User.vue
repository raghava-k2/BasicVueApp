<template>
  <Button
    icon="pi pi-user"
    class="p-button-rounded p-button-text !mr-2 !px-0"
    @click="userIconClick"
    :label="user?.name"
  />
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Store, useStore } from "vuex";

const store: Store<any> = useStore();
const user: any = computed(() => store.state.user);

function userIconClick(e: any) {
  console.log(e);
}
</script>

