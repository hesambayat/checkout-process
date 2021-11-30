<template>
  <router-link to="/info" custom v-slot="{ navigate }">
    <button @click="navigate" class="landing">
      <span class="landing__el landing__el--checkbox landing__el--checkbox--a" />
      <span class="landing__el landing__el--circle landing__el--circle--a">
        <span />
        <span>
          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.13,9.82,12.85,16.2V2h-2.7V16.2L4.87,9.83,2.8,11.57,11.52,22l8.67-10.43Z"/></svg>
        </span>
      </span>
      <span class="landing__el landing__el--gradient landing__el--gradient--a" />
      <span class="landing__el landing__el--label">Start</span>
      <span class="landing__el landing__el--circle landing__el--circle--b">
        <span />
        <span />
      </span>
      <span class="landing__el landing__el--marquee">
        <span class="landing__el--marquee__inner">
          <span>A simple workflow that guides the user through a checkout process &#10033;</span>
          <span aria-hidden="true">A simple workflow that guides the user through a checkout process &#10033;</span>
          <span aria-hidden="true">A simple workflow that guides the user through a checkout process &#10033;</span>
          <span aria-hidden="true">A simple workflow that guides the user through a checkout process &#10033;</span>
        </span>
      </span>
      <span class="landing__el landing__el--circle landing__el--circle--c" />
      <span class="landing__el landing__el--checkbox landing__el--checkbox--b" />
      <span class="landing__el landing__el--gradient landing__el--gradient--b" />
      <span class="landing__el landing__el--emoji">
        <span class="landing__el--emoji__view">
          <span class="landing__el--emoji__view__item landing__el--emoji__view__item--front">0_0</span>
          <span class="landing__el--emoji__view__item landing__el--emoji__view__item--back"><span>^0^</span></span>
          <span class="landing__el--emoji__view__item landing__el--emoji__view__item--top">+.+</span>
          <span class="landing__el--emoji__view__item landing__el--emoji__view__item--bottom">^_^</span>
        </span>
      </span>
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
$cell: 100px;
$delay: 500ms;
.landing {
  $color-00: $color-body;
  $color-01: $color-background;
  $color-02: $color-light-green;
  $color-03: $color-orange;
  $color-04: #f25757;
  $color-05: #c3acac;

  display: grid;
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 40px;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  text-align: left;
  background: transparent;

  &__el {
    display: none;
    position: relative;
    height: $cell;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: $cell * 0.5;
    border: 5px solid;
    background-color: $color-02;
    color: $color-00;
    overflow: hidden;
    pointer-events: none;
    perspective: 600px;

    &--circle {
      width: $cell;

      > span {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
      }

      &--a {
        display: flex;
        grid-area: 1 / 7 / 2 / 8;
        transform-style: preserve-3d;
        background-color: $color-05;

        > span {
          &:first-child {
            background-color: $color-04;
            transform: translateY(-100%) translateZ(50px) rotateX(45deg);
            animation: slide-down 500ms cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          &:last-child {
            background-color: $color-03;
            transform: translateY(-120%) translateZ(50px) rotateX(45deg);
            animation: slide-down 500ms 100ms cubic-bezier(0.4, 0, 0.2, 1) both;
          }
        }
      }

      &--b {
        background-color: $color-02;

        > span {
          &:first-child {
            background-color: $color-03;
            transform: translateX(-100%) translateZ(50px) rotateY(45deg);
            animation: slide-down 500ms $delay * 2 cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          &:last-child {
            background-color: $color-01;
            transform: translateX(-120%) translateZ(50px) rotateY(45deg);
            animation: slide-down 500ms $delay * 2 + 100ms cubic-bezier(0.4, 0, 0.2, 1) both;
          }
        }

        @media (min-width: $breakpoint) {
          & {
            grid-area: 3 / 1 / 4 / 2;
            display: flex;
          }
        }
      }

      &--c {
        background-color: $color-04;

        @media (min-width: $breakpoint) {
          & {
            grid-area: 3 / 7 / 4 / 8;
            display: flex;
          }
        }
      }
    }

    &--label {
      display: flex;
      grid-area: 2 / 1 / 3 / 8;
      padding-top: 8px;
      border-radius: 0;

      @at-root button:hover:not(:active) #{&} {
        @include make-decorate()
      }

      @at-root button:focus:not(:active) #{&} {
        @include make-decorate()
      }

      @media (min-width: $breakpoint) {
        & {
          grid-area: 2 / 5 / 3 / 8;
        }
      }
    }

    &--emoji {
      display: flex;
      grid-area: 4 / 5 / 5 / 8;

      &__view {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: rotateX(90deg);
        animation: rotate 800ms $delay cubic-bezier(0.64, 0.05, 0.4, 0.82) both;
        will-change: transform;

        &__item {
          display: flex;
          position: absolute;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          padding-top: 8px;
  
          &--front {
            transform: rotateY(0deg) translateZ($cell * 0.5 - 5px);
            background-color: $color-02;
          }
  
          &--back {
            transform: rotateY(180deg) translateZ($cell * 0.5 - 5px);
            background-color: $color-03;

            span {
              display: flex;
              position: absolute;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: center;
              padding-top: 16px;
              transform: rotateX(180deg);
            }
          }
  
          &--top {
            transform: rotateX(90deg) translateZ($cell * 0.5 - 5px);
            background-color: $color-04;
          }
          
          &--bottom {
            transform: rotateX(-90deg) translateZ($cell * 0.5 - 5px);
            background-color: $color-05;
          }
        }
      }

      @media (min-width: $breakpoint) {
        & {
          grid-area: 4 / 6 / 5 / 8;
        }
      }
    }

    &--gradient {
      background: linear-gradient(to right, $color-05, $color-02);

      &--a {
        background: linear-gradient(to right, $color-03, $color-04);

        @media (min-width: $breakpoint) {
          & {
            display: flex;
            grid-area: 2 / 1 / 3 / 5;
          }
        }
      }

      &--b {
        display: flex;
        grid-area: 4 / 1 / 5 / 5;

        @media (min-width: $breakpoint) {
          & {
            grid-area: 4 / 4 / 5 / 6;
          }
        }
      }
    }

    &--marquee {
      display: flex;
      position: relative;
      grid-area: 3 / 1 / 4 / 8;
      background-color: transparent;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: $cell * 0.5;
        transform: scale(0);
        transform-origin: 100% 50%;
        background-color: $color-03;
        animation: scale 800ms cubic-bezier(0.64, 0.05, 0.4, 0.82) both;
      }

      &__inner {
        --offset: 2em;
        --move-initial: calc(-25% + var(--offset));
        --move-final: calc(-50% + var(--offset));
        width: fit-content;
        display: flex;
        position: relative;
        transform: translate3d(var(--move-initial), 0, 0);
        animation: marquee 40s linear infinite;
        will-change: transform;
  
        span {
          padding: 0 0.2em;
          font-size: 28px;
        }
      }

       @media (min-width: $breakpoint) {
        & {
          grid-area: 3 / 2 / 4 / 7;
        }
      }
    }

    &--checkbox {
      $duration: 2000ms;
      $timing: cubic-bezier(0.4, 0, 0.2, 1);
      
      background-color: $color-04;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: $cell * 0.5;
        background-color: $color-05;
        transform-origin: 0 0;
        will-change: transform;
      }

      &::after {
        content: '';
        position: absolute;
        top: -5px;
        right: -5px;
        width: $cell;
        height: $cell;
        border: 5px solid;
        border-radius: $cell * 0.5;
        background-color: $color-01;
        will-change: right;
      }

      &--a {
        display: flex;
        grid-area: 1 / 1 / 2 / 7;

        &::before {
          transform: translateX(calc(-100% + ($cell * 0.5)));
          animation: slide-back $duration $timing both;
        }

        &::after {
          background-color: $color-02;
          animation: slide-front $duration $timing both;
        }
      }

      &--b {
        @media (min-width: $breakpoint) {
          & {
            display: flex;
            grid-area: 4 / 1 / 5 / 4;
          }
        }
      }
    }
  }
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}

@keyframes rotate {
  100% { transform: rotateX(360deg); }
}

@keyframes slide-back {
  100% { transform: none; }
}

@keyframes slide-front {
  0% { right: calc(100% - $cell + 5px); }
}

@keyframes slide-down {
  100% { transform: none; }
}

@keyframes scale {
  5% { transform: scaleX(0.2) scaleY(1); }
  100% { transform: scale(1); }
}
</style>