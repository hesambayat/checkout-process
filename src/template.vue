<template>
  <layout-pattern />
  <layout-header />
  <main id="content" class="site-content">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.site-content {  
  @include make-container();
}
</style>