<template>
  <div class="pattern" :class="`page-${currentRouteName}`">
    <div class="pattern__screen" />
  </div>
</template>

<script>
export default {
  name: 'layout-pattern',
  computed: {
    currentRouteName() {
      return this.$route.name?.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase() || 'home'
    }
  }
}
</script>

<style lang="scss">
  .pattern {
    $width: 100vw;
    $height: 100vh;

    position: fixed;
    width: $width;
    height: $height;
    pointer-events: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    &__screen {
      display: flex;
      position: relative;
      flex-wrap: nowrap;
      width: $width * 4;
      height: $height;
      transform-origin: 0% 50%;
      will-change: transform;
      background-image: linear-gradient(to right, #dc4c7b, #c64cdc, #4c78dc, #93dc4c);

      @at-root .page-info #{&} {
        transform: translateX($width * -1);
      }

      @at-root .page-consent #{&} {
        transform: translateX($width * -2);
      }

      @at-root .page-account #{&} {
        transform: translateX($width * -3);
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("~@/assets/images/pattern.svg");
        opacity: 0.2;
        mix-blend-mode: overlay;
      }

      @media (min-width: $breakpoint) {
        & {
          transition: transform 1.2s cubic-bezier(0.45, 0.05, 0.35, 0.96);
        }
      }
    }
  }
</style>