<template>
  <nav class="cac-navbar dark:bg-gray-800">
    <div class="mt-2 px-2.5">
      <u1 class="cac-navbar-menu list-none">
        <li
          v-for="item in menus" :key="item.index"
          class="cac-navbar-menu-item p-2 rounded-md dark:text-white"
        >
          <router-link
            :to="item.route"
            class="flex items-center"
            active-class="active-item"
            exact-path-active-class="active-item"
            exact-active-class="active-item"
            exact
          >
            <span class="flex-initial text-3xl">
              <i class="pi pi-home"></i>
            </span>
            <span class="flex-1 ml-5"> {{ item.label }} </span>
          </router-link>
        </li>
      </u1>
    </div>
  </nav>
</template>
<style lang="sass">
.cac-navbar
  position: fixed
  width: 300px
  height: calc(100vh)
  z-index: 1
  overflow-y: auto
  overflow-x: hidden
  -webkit-user-select: none
  user-select: none
  top: 3.5rem
  left: 0rem
  transition: transform .2s,left .2s
  background-color: var(--surface-overlay)
  border-radius: 0px
  padding: 0rem
  box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)

  .cac-navbar-menu-item:hover
    background: #18353d

  .cac-navbar-menu-item .active-item
    background: #0c4a56
</style>
<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      menus: [
        {
          label: "Home",
          route: "/home",
        },
      ],
    };
  },
};
</script>