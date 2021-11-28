<template>
  <header class="cac-header">
    <h1>header</h1>
  </header>
</template>
<style lang="sass" scoped>
.cac-header
  position: fixed
  height: 3.5rem
  z-index: 1
  left: 0
  top: 0
  width: 100%
  padding: 0 2rem
  background-color: var(--surface-card)
  transition: left .2s
  display: flex
  align-items: center
  box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)
</style>