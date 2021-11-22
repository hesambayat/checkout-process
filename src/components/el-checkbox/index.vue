<template>
  <div class="form-element form-element--checkbox">
    <label>
      <input type="checkbox" :checked="modelValue === 'yes'" :value="modelValue" @change="$emit('update:modelValue', $event.target.checked ? 'yes' : 'no')" />
      <span class="form-element__label" v-if="!!label">{{ label }}</span>
      <span class="form-element__error-message" v-if="!!errorMessage">{{ errorMessage }}</span>
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
