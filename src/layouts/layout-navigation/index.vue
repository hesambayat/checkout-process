<template>
  <nav class="navigation">
    <router-link :to="back.to">Go back!</router-link>
    <router-link 
      :to="next.to"
      custom
      v-slot="{ navigate }"
    >
      <button @click="navigate" :disabled="next.disabled">Next</button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'layout-navigation',
  props: ['back', 'next']
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: $container-padding-y;

  & > *:last-child {
    margin-left: 60px;
  }

  a {
    color: inherit;
    font-size: 24px;
    font-weight: $font-weight-bold;
    line-height: 36px;
    user-select: none;
  }

  button {
    padding: 20px 130px 10px 20px;
    background-color: $color-light-green;
    @include make-decorate(-12px, 11px, 0, 3px);
  }
}
</style>