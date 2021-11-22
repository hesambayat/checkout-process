<template>
  <h1>Account</h1>
  <img :src="avatar" />
</template>

<script>
export default {
  name: 'Account',
  computed: {
    avatar() {
      return this.$store.getters.avatar
    }
  },
  mounted() {
    if (this.$store.state.slides.info === false) {
      this.$router.replace('/info')
    } else if (this.$store.state.slides.consent === false) {
      this.$router.replace('/consent')
    }
  }
}
</script>
