<template>
  <nav class="cac-navbar">
    <u1 class="cac-navbar-menu">
      <li class="cac-navbar-menu-item">Home</li>
    </u1>
  </nav>
</template>
<style lang="sass" scoped>
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
  transition: transform .2s,left .2s
  background-color: var(--surface-overlay)
  border-radius: 0px
  padding: 1.5rem
  box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)
</style>