<template>
  <div class="grid" :style="{ '--rows': rows, '--columns': columns, '--gap': gap }"><slot /></div>
</template>

<script>
export default {
  name: 'el-grid',
  props: {
    rows: {
      type: String,
      default: '1'
    },
    columns: {
      type: String,
      default: '1'
    },
    gap: {
      type: String,
      default: '0 100px'
    }
  }
}
</script>

<style lang="scss">
.grid {
  @include make-grid();
}
</style>