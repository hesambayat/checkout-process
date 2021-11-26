<template>
  <layout-pattern />
  <layout-header />
  <main id="content" class="site__content">
    <div class="site__content__inner">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.site__content {  
  @include make-container();
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 280px);
}
</style>