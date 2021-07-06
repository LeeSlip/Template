module.exports = {
  css: {
      loaderOptions: {
          sass: {
              additionalData: `
          @import "./resources/sass/app.scss";
          `
          }
      }
  }
};