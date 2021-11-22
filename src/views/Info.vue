<template>
  <h1>Info</h1>
  <el-input v-model="givenName" label="First name" :errorMessage="errors.givenName" type="text" autocomplete="given-name" />
  <el-input v-model="familyName" label="Last name" :errorMessage="errors.familyName" type="text" autocomplete="family-name" />
  <el-input v-model="githubUsername" label="Github username" :errorMessage="errors.githubUsername" type="text" />
  <router-link to="/">Back</router-link>
  <router-link 
    to="/consent"
    custom
    v-slot="{ navigate }"
  >
    <button @click="navigate" :disabled="!$store.state.slides.info">Next</button>
  </router-link>
</template>

<script>
import { required } from '@/utils/validators'

export default {
  name: 'Info',
  data: () => ({ 
    errors: {}
  }),
  computed: {
    givenName: {
      get() {
        return this.$store.state.userInfo.givenName
      },
      set(value) {
        this.errors.givenName = !required(value) ? 'First name is required' : ''
        this.$store.commit('setGivenName', value)
      }
    },
    familyName: {
      get() {
        return this.$store.state.userInfo.familyName
      },
      set(value) {
        this.errors.familyName = !required(value) ? 'Family name is required' : ''
        this.$store.commit('setFamilyName', value)
      }
    },
    githubUsername: {
      get() {
        return this.$store.state.userInfo.githubUsername
      },
      set(value) {
        this.errors.githubUsername = !required(value) ? 'Github username is required' : ''
        // TODO: add github username validation
        this.$store.commit('setGithubUsername', value)
      }
    }
  },
  created() {
    // Update the next button enable/disabled state
    this.$watch(
      () => this.$store.state.userInfo,
      () => {
        this.$store.commit('updateSlide', { 
          id: 'info', 
          validity: !(
            // Check if there are any errors
            Object.values(this.errors).find(error => error) !== undefined 
            // Check if all the fields are filled
            || Object.values(this.$store.state.userInfo).find(entry => !entry) !== undefined
          )
        })
      },
      { deep: true }
    )
  }
}
</script>
