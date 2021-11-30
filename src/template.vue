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
.site {
  &,
  * {
    cursor: url("~@/assets/images/cursor.svg"), auto;
  }

  a,
  button {
    cursor: url("~@/assets/images/cursor-hand.svg"), auto;
  }

  button {
    &:disabled,
    &.disabled {
      cursor: url("~@/assets/images/cursor-disabled.svg"), auto;
    }

    &:not(:disabled):not(.disabled) {
      &:active {
        cursor: url("~@/assets/images/cursor-hand.svg"), auto;
      }
    }
  }

  input {
    cursor: url("~@/assets/images/cursor-edit.svg"), auto;
  }

  &__content {  
    @include make-container();
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 280px);
  }
}
</style>