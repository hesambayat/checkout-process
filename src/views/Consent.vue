<template>
  <el-grid columns="2">
    <el-input v-model="email" label="Email" :errorMessage="errors.email" type="email" autocomplete="email" />
  </el-grid>
  <el-grid columns="2">
    <el-checkbox v-model="termConsent" label="By using this website, you certify that you have read and reviews the agreement and that you agree to comply this its terms." :errorMessage="errors.termConsent" />
  </el-grid>
  <layout-navigation :back="{ to: '/info' }" :next="{ to: '/account', disabled: !$store.state.slides.consent }" />
</template>

<script>
import { required, email } from '@/utils/validators'

export default {
  name: 'Consent',
  data: () => ({ 
    errors: {
      email: ''
    },
    next: true 
  }),
  computed: {
    email: {
      get() {
        return this.$store.state.userConsent.email
      },
      set(value) {
        this.errors.email = !required(value) ? 'Email is required' : !email(value) ? 'Email is invalid' : ''
        this.$store.commit('setEmail', value)
      }
    },
    termConsent: {
      get() {
        return this.$store.state.userConsent.termConsent
      },
      set(value) {
        const accepted = value === 'yes' ? 'yes' : ''
        this.errors.termConsent = !required(accepted) ? 'Agreement to terms is required' : ''
        this.$store.commit('setTermConsent', accepted)
      }
    }
  },
  created() {
    // Update the next button enable/disabled state
    this.$watch(
      () => this.$store.state.userConsent,
      () => {
        this.$store.commit('updateSlide', { 
          id: 'consent', 
          validity: !(
            // Check if there are any errors
            Object.values(this.errors).find(error => error) !== undefined 
            // Check if all the fields are filled
            || Object.values(this.$store.state.userConsent).find(entry => !entry) !== undefined
          )
        })
      },
      { deep: true }
    )
  },
  mounted() {
    if (this.$store.state.slides.info === false) {
      this.$router.replace('/info')
    }
  }
}
</script>
