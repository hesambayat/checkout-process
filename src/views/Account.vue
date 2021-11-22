<template>
  <h1>Account</h1>
  <img src="http://placehold.it/200x200" />
</template>

<script>
export default {
  name: 'Account',
  mounted() {
    if (this.$store.state.slides.info === false) {
      this.$router.replace('/info')
    } else if (this.$store.state.slides.consent === false) {
      this.$router.replace('/consent')
    }
  }
}
</script>
