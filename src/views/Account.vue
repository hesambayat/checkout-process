<template>
  <div class="user-info">
    <img :src="info?.githubPayload?.avatar_url" />
    <h1>{{`${info?.givenName} ${info?.familyName}`}}</h1>
    <p>{{email}}</p>
    <p>@{{info?.githubUsername}}</p>
  </div>
</template>

<script>
export default {
  name: 'Account',
  computed: {
    info() {
      return this.$store.state.userInfo
    },
    email() {
      return this.$store.state.userConsent.email
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

<style lang="scss" scoped>
img {
  display: block;
  width: 280px;
  height: 280px;
  border: 24px solid;
  margin-bottom: $container-padding-y;
  background-color: $color-body;
}

h1 {
  font-size: 72px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
}

p {
  font-size: 24px;
  font-weight: $font-weight-bold;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0;
}

.user-info {
  margin-bottom: $container-padding-y;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
