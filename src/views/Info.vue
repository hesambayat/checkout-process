<template>
  <el-grid columns="2">
    <el-input v-model="givenName" label="First name" :errorMessage="errors.givenName" type="text" autocomplete="given-name" />
    <el-input v-model="familyName" label="Last name" :errorMessage="errors.familyName" type="text" autocomplete="family-name" />
    <el-input v-model="githubUsername" label="Github username" :errorMessage="errors.githubUsername" class="github" type="text">
      <div class="github__loader">
        <svg v-if="loading" width="50px" height="50px" viewBox="0 0 50 50">
          <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <img v-if="!loading && github?.avatar_url" :src="github.avatar_url" class="github__thumb" />
      </div>
    </el-input>
  </el-grid>
  <layout-navigation :back="{ to: '/' }" :next="{ to: '/consent', disabled: !$store.state.slides.info, hint: hint, callback: validate }" />
</template>

<script>
import { github, required } from '@/utils/validators'

export default {
  name: 'Info',
  data: () => ({ 
    errors: {},
    loading: false,
  }),
  methods: {
    validate () {
      this.givenName = this.$store.state.userInfo.givenName
      this.familyName = this.$store.state.userInfo.familyName
      this.githubUsername = this.$store.state.userInfo.githubUsername
      if (this.github?.message) {
        this.errors.githubUsername = this.github.message || this.errors.githubUsername
      }
    }
  },
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
        this.errors.familyName = !required(value) ? 'Last name is required' : ''
        this.$store.commit('setFamilyName', value)
      }
    },
    githubUsername: {
      get() {
        return this.$store.state.userInfo.githubUsername
      },
      set(value) {
        this.errors.githubUsername = !required(value) ? 'Github username is required' : !github(value) ? 'Invalid Github username' : ''
        this.$store.commit('setGithubUsername', value)
      }
    },
    github() {
      return this.$store.getters.github
    },
    hint() {
      // all fields are filled and no errors
      return !this.$store.state.slides.info
        && !this.loading
        && this.givenName && this.familyName && this.githubUsername && (!this.github || this.github?.message)
        && Object.values(this.errors).find(error => error) === undefined 
    }
  },
  created() {
    // Validate github username
    this.$watch(
      () => this.githubUsername,
      (username) => {
        // Reset validation
        clearTimeout(this.timeout)
        this.$store.commit('setGithubPayload', '')
        if (username.length > 0 && !this.errors.githubUsername) {
          // Validate github username
          this.loading = true
          this.timeout = setTimeout(() => {
            this.$store.dispatch('getGithubPayload', username)
          }, 1000)
        } else {
          this.loading = false
        }
      }
    )

    // Display loading indicator
    this.$watch(
      () => this.github,
      (user) => {
        if (user) {
          this.loading = false
          this.errors.githubUsername = user?.message || ''
        }
      },
      { deep: true }
    )

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
            || !this.givenName || !this.familyName || !this.githubUsername || !this.github || this.github.message
          )
        })
      },
      { deep: true }
    )
  },
  mounted() {
    this.hint && this.validate()
  }
}
</script>

<style lang="scss">
.github {
  position: relative;;

  &__loader {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    pointer-events: none;

    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  input {
    padding-right: 50px;
  }
}
</style>