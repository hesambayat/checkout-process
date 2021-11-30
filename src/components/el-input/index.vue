<template>
  <div class="input" :class="{ error: !!errorMessage }">
    <label>
      <span class="input__label" v-if="!!label">{{ label }}</span>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="onblur" @focus="onfocus" :type="type" :autocomplete="autocomplete" />
      <span class="input__error-message" v-if="!!errorMessage?.trim()">{{ errorMessage }}</span>
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'el-input',
  props: ['modelValue', 'label', 'type', 'errorMessage', 'autocomplete', 'onblur', 'onfocus'],
  emits: ['update:modelValue'],
}
</script>

<style lang="scss">
.input {
  margin-bottom: $container-padding-y * 1.5;

  label {    
    display: flex;
    position: relative;
    flex-direction: column;
  }

  input {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 10px 14px 0;
    margin: 0;
    font-family: $font-family;
    font-weight: $font-weight-bold;
    font-size: 48px;
    line-height: 1.25;
    border: 5px solid;
    border-radius: 0;
    background-color: $color-background;
    color: inherit;

    &:focus {
      @include make-decorate();
    }
    
    appearance: none;
  }

  &__label {
    display: block;
    width: 100%;
    padding-left: 22px;
    font-size: 40px;
    font-weight: $font-weight-bold;
    line-height: 42px;
    user-select: none;
  }

  &__error-message {
    display: block;
    position: absolute;
    max-width: 95%;
    top: 100%;
    left: 5%;
    padding: 14px 4% 10px;
    font-size: 21px;
    font-weight: $font-weight-bold;
    line-height: 24px;
    pointer-events: none;
    background-color: $color-orange;
    color: $color-body;

    @include make-decorate(-4px, 5px);
    transform: translateY(-20px) rotate(2deg);

    will-change: transform;

    @at-root input:focus + #{&} {
      transform: translate(-10px, -16px) rotate(-1deg);
    }
  }
}
</style>