<template>
  <header id="masthead" class="site__header">
    <router-link to="/" class="site__header__logo">&#10033;</router-link>      
  </header>
</template>

<script>
export default {
  name: 'layout-header',
}
</script>

<style lang="scss">
.site__header {
  @include make-container();

  margin-top: 20px;
  margin-bottom: 60px;

  &__logo {
    display: inline-flex;
    font-size: 60px;
    font-weight: bold;
    line-height: 1;
    color: $color-light-green;
    will-change: transform, text-shadow;
    user-select: none;

    &:focus,
    &:hover {
      &:not(:active) {
        text-shadow: -4px 5px 0 $color-body;
        transform: translate(4px, -5px);
      }
    }
  }
}
</style>
