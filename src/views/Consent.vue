<template>
  <el-grid columns="2">
    <el-input v-model="email" label="Email" :errorMessage="errors.email" :onblur="onblur" type="email" autocomplete="email" />
  </el-grid>
  <el-grid columns="2">
    <el-checkbox v-model="termConsent" label="By using this website, you certify that you have read and reviews the agreement and that you agree to comply this its terms." :errorMessage="errors.termConsent" />
  </el-grid>
  <layout-navigation :back="{ to: '/info' }" :next="{ to: '/account', callback: validate, disabled: !$store.state.slides.consent, hint: hint }" />
</template>

<script>
import { required, email } from '@/utils/validators'

export default {
  name: 'Consent',
  data: () => ({ 
    errors: {}
  }),
  methods: {
    validate() {
      this.email = this.$store.state.userConsent.email
      this.termConsent = this.$store.state.userConsent.termConsent
      this.onblur()
    },
    onblur() {
      if (this.email) {
        this.errors.email = !email(this.email) ? 'Email is invalid' : ''
      }
    }
  },
  computed: {
    email: {
      get() {
        return this.$store.state.userConsent.email
      },
      set(value) {
        this.errors.email = !required(value) ? 'Email is required' : ' '
        this.$store.commit('setEmail', value)
      }
    },
    termConsent: {
      get() {
        return this.$store.state.userConsent.termConsent
      },
      set(value) {
        this.errors.termConsent = value !== 'yes' ? 'Agreement to terms is required' : ''
        this.$store.commit('setTermConsent', value)
      }
    },
    hint() {
      // all fields are filled and no errors
      return !this.$store.state.slides.consent
        && ((this.email && !email(this.email)) || (this.email && email(this.email) && this.termConsent === 'no'))
        && Object.values(this.errors).find(error => error) === undefined 
    }
  },
  created() {
    // Update the next button enable/disabled state
    this.$watch(
      () => this.$store.state.userConsent,
      () => {
        this.$store.commit('updateSlide', { 
          id: 'consent', 
          validity: this.termConsent === 'yes' && email(this.email)
        })
      },
      { deep: true }
    )
  },
  mounted() {
    if (this.$store.state.slides.info === false) {
      this.$router.replace('/info')
      return
    }

    this.hint && this.validate()
  }
}
</script>
