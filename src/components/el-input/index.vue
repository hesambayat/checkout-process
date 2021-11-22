<template>
  <div class="form-element form-element--input" :class="{ error: !!errorMessage }">
    <label>
      <span class="form-element__label" v-if="!!label">{{ label }}</span>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" :autocomplete="autocomplete" />
      <span class="form-element__error-message" v-if="!!errorMessage">{{ errorMessage }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'el-input',
  props: ['modelValue', 'label', 'type', 'errorMessage', 'autocomplete'],
  emits: ['update:modelValue'],
}
</script>
