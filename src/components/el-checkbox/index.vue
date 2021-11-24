<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" :checked="modelValue === 'yes'" :value="modelValue" @change="$emit('update:modelValue', $event.target.checked ? 'yes' : 'no')" />
      <span class="checkbox__mock">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51185 1.66669L3.33334 7.8452L0.488159 5.00002L1.66667 3.82151L3.33334 5.48817L8.33334 0.488174L9.51185 1.66669Z"/>
        </svg>
      </span>
      <span class="checkbox__label" v-if="!!label">{{ label }}</span>
      <span class="checkbox__error-message" v-if="!!errorMessage">{{ errorMessage }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'el-checkbox',
  props: ['modelValue', 'label', 'errorMessage'],
  emits: ['update:modelValue'],
}
</script>

<style lang="scss">
.checkbox {
  margin-bottom: $container-padding-y * 2.25;

  label {    
    display: flex;
    position: relative;
    flex-direction: column;
    padding-left: 60px;
    padding-bottom: 20px;
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    opacity: 0;
  }

  &__mock {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: 5px solid;
    border-radius: 0;
    background-color: $color-background;
    color: inherit;

    @include make-decorate();

    svg {
      fill: currentColor;
      width: 20px;
      height: 16px;
      opacity: 0;
    }

    @at-root input:checked + #{&} {
      svg {
        opacity: 1;
      }
    }
  }

  &__label {
    display: block;
    width: 100%;
    font-size: 18px;
    font-weight: $font-weight-bold;
    line-height: 24px;
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
    transform: translateY(-20px) rotate(2deg);
    pointer-events: none;
    background-color: $color-orange;
    color: $color-body;

    @include make-decorate(-4px, 5px);
  }
}
</style>