<template>
  <img :src="github?.avatar_url" />
</template>

<script>
export default {
  name: 'Account',
  computed: {
    github() {
      return this.$store.getters.github
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
