module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/scss/variables";
          @import "~@/scss/mixins";
        `
      }
    }
  }
}