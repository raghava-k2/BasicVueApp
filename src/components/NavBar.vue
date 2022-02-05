<template>
  <nav class="cac-navbar dark:bg-gray-800" v-bind:class="{ 'w-40': toggle }">
    <div class="mt-2 px-2.5">
      <u1 class="cac-navbar-menu list-none">
        <li
          v-for="item in menus"
          :key="item.index"
          class="cac-navbar-menu-item p-2 pl-1.5 rounded-md dark:text-white"
        >
          <router-link
            :to="item.route"
            class="flex items-center text-green-700"
            active-class="active-item"
            exact
          >
            <span class="flex-initial">
              <i class="text-2xl " v-bind:class="item.icon"></i>
            </span>
            <span class="flex-1 ml-5"> {{ item.label }} </span>
          </router-link>
        </li>
      </u1>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  name: "NavBar",
  data: function () {
    return {
      menus: [
        {
          label: "Home",
          route: "/",
          icon: "pi pi-home",
        },
        {
          label: "Folders",
          route: "/folders",
          icon: "pi pi-folder",
        },{
          label: "Shared",
          route: "/shared",
          icon: "pi pi-external-link",
        }
      ],
    };
  },
  props: {
    toggle: Boolean,
  },
};
</script>
<style lang="sass">
.cac-navbar
  position: fixed
  width: 3.5rem
  height: calc(100vh)
  z-index: 1
  overflow-y: auto
  overflow-x: hidden
  -webkit-user-select: none
  user-select: none
  top: 3.5rem
  left: 0rem
  transition: width .3s linear
  background-color: var(--surface-overlay)
  border-radius: 0px
  padding: 0rem
  box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)

  .cac-navbar-menu-item:hover
    background: #18353d

  .cac-navbar-menu-item .active-item
    color: white !important
  .cac-navbar-menu-item .pi
    font-size: 1.5rem
</style>