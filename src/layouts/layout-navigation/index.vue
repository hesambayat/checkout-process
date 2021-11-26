<template>
  <nav class="navigation">
    <router-link :to="back.to">Go back!</router-link>
    <router-link 
      :to="next.to"
      custom
      v-slot="{ navigate }"
    >
      <button @click="next.disabled ? next.callback() : navigate()" :class="{ disabled: next.disabled, hint: next.hint }" >
        <span>Next</span>
        <svg width="93px" height="92px" viewBox="0 0 93 92">
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stop-color="#69a9f2" />
              <stop offset="25%" stop-color="#8e5cf1" />
              <stop offset="50%" stop-color="#cd53fa" />
              <stop offset="75%" stop-color="#f558e0" />
              <stop offset="100%" stop-color="#f15d5d" />
            </linearGradient>
          </defs>
          <g class="failed" fill="url(#gradient)">
            <path d="M36.6,33.6l8.4,6.2l-3.7,5l-8.4-6.2l-6,8.1l-5-3.7l6-8.1l-7.2-5.3l3.7-5l7.2,5.3l5.5-7.5l5,3.7L36.6,33.6z
              M73.9,37.1l-8.4-6.2l5.5-7.5l-5-3.7l-5.5,7.5l-7.2-5.3l-3.7,5l7.2,5.3l-6,8.1l5,3.7l6-8.1l8.4,6.2L73.9,37.1z M45.1,69.9l5,3.7
              l10.5-14.2l-5-3.7L45.1,69.9z"/>
            <path d="M90.1,44C88.9,20,68.4,1.6,44.4,2.8S2,24.5,3.2,48.5S25,91,48.9,89.7C72.9,88.4,91.4,68,90.1,44z M48.6,83.7
              C28,84.8,10.3,68.9,9.2,48.2C8.1,27.5,24,9.9,44.7,8.8S83,23.6,84.1,44.3S69.3,82.6,48.6,83.7z"/>
          </g>
          <g class="listening">
            <path d="M48.7,35.8L48.6,35l5.9-1.3l0.1,0.7l0.2,1l0.2,0.9l0.1,0.5l0.1,0.5l0.1,0.5c0,0.1,0,0.1,0.1,0.2
              l0.1,0.4l0.1,0.4c0,0.1,0.1,0.2,0.1,0.4l0.1,0.3l0.1,0.3c0.7,1.3,1.5,1.8,2.6,1.8c0.9,0,1.7-0.8,2.5-3l0.2-0.5
              c0-0.1,0.1-0.2,0.1-0.3l0.2-0.6l0.7-2.4c0.2-0.5,0.3-0.9,0.4-1.3l0.1-0.3l5.6,2.3l-0.1,0.3c0,0.1,0,0.1-0.1,0.2l-0.1,0.4l-0.9,2.8
              l0,0.1c-0.1,0.2-0.1,0.4-0.2,0.6l-0.2,0.6c-1.7,4.5-3.9,7-8.1,7c-3.4,0-6-1.7-7.7-4.6c-0.5-0.9-0.9-1.8-1.3-2.9l-0.2-0.5l-0.2-0.6
              c0-0.1-0.1-0.2-0.1-0.3L49.3,38l-0.2-0.7l-0.2-0.7L48.7,35.8z M20.9,39.6l0.2,0.7c0,0.1,0.1,0.2,0.1,0.3l0.2,0.7l0.2,0.6l0.2,0.6
              c0,0.1,0.1,0.2,0.1,0.3l0.2,0.5c0.1,0.3,0.2,0.5,0.3,0.7l0.2,0.5c0.1,0.1,0.1,0.3,0.2,0.4l0.2,0.4c0.1,0.2,0.2,0.4,0.3,0.6
              c1.7,2.9,4.2,4.6,7.7,4.6c4.6,0,6.9-2.9,8.6-8.2l0.1-0.2l0.7-2.4l0.1-0.4l0.1-0.4l0.1-0.3l0.1-0.2L35,36.2l-0.1,0.3
              c-0.1,0.4-0.3,0.8-0.4,1.3l-0.7,2.4l-0.2,0.6l-0.2,0.6c0,0.1-0.1,0.2-0.1,0.3l-0.2,0.5c-0.7,1.8-1.4,2.5-2.3,2.5c0,0-0.1,0-0.1,0
              l-0.2,0c-0.9-0.1-1.6-0.5-2.1-1.6l-0.1-0.3c0-0.1,0-0.1-0.1-0.2l-0.1-0.3c0-0.1-0.1-0.2-0.1-0.4l-0.1-0.4c0-0.1,0-0.1-0.1-0.2
              l-0.1-0.4l-0.1-0.5l-0.1-0.5L27,39.2l-0.1-0.6l-0.2-0.9l-0.2-1L20.6,38l0.1,0.4L20.9,39.6z M69,49.5l-0.2,0.3l-0.3,0.3
              c-0.2,0.3-0.5,0.6-0.9,1c-1.2,1.3-2.7,2.7-4.4,3.9c-4.5,3.3-10,5.6-16.4,6.2c-6.6,0.7-12.3-0.4-16.9-2.6c-1.6-0.8-3-1.6-4.1-2.4
              c-0.1,0-0.1-0.1-0.2-0.1l-0.3-0.2l-0.3-0.2l-0.2-0.2l-0.2-0.1l-0.1-0.1l-4.3,4.2l0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.3,0.3l0.3,0.3
              c0.1,0.1,0.1,0.1,0.2,0.2l0.4,0.3c0.1,0.1,0.3,0.2,0.5,0.4c1.4,1.1,3.2,2.1,5.2,3.1c5.6,2.6,12.3,3.9,20.1,3.1
              c7.5-0.7,14-3.4,19.4-7.4c2.1-1.5,3.8-3.1,5.3-4.7l0.4-0.4c0.1-0.1,0.1-0.1,0.2-0.2l0.3-0.4l0.3-0.4l0.3-0.3l0.2-0.3l0.2-0.2
              L69,49.5z"/>
            <path d="M90.1,44C88.9,20,68.4,1.6,44.4,2.8S2,24.5,3.2,48.5S25,91,48.9,89.7C72.9,88.4,91.4,68,90.1,44z M48.6,83.7
              C28,84.8,10.3,68.9,9.2,48.2C8.1,27.5,24,9.9,44.7,8.8S83,23.6,84.1,44.3S69.3,82.6,48.6,83.7z"/>
          </g>
        </svg>
      </button>
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
    padding: 20px 110px 10px 20px;
    background-color: $color-light-green;
    @include make-decorate(-12px, 11px);
    will-change: transform, box-shadow;

    &:active {
      
      transform: translate(-12px, 11px);
      @include make-decorate(0, 0);
    }

    &.disabled {
      background-color: $color-wild-green;
      color: $color-kaki-green;
    }

    &.hint {
      span {
        color: $color-body;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          90deg,
          #ff4545 0%,
          #ffb84e 20%,
          #ccd642 40%,
          #65cb62 60%,
          #6bc0d5 80%,
          #69a9f2 100%
        );
      }

      svg {
        .failed {
          opacity: 1;
        }

        .listening {
          opacity: 0;
        }
      }
    }

    svg {
      position: absolute;
      top: 3px;
      right: 4px;
      fill: currentColor;
      pointer-events: none;

      .failed {
        opacity: 0;
      }
    }

    span {
      pointer-events: none;
    }
  }
}
</style>