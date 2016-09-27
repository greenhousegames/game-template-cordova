const fs = require('fs');

module.exports = {
  paths: {
    public: 'cordova/www'
  },

  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': [/^(?!app)/,"!test/**/*"],
        'js/app.js': [/^app/,"!**/*.spec.js"]
      }
    },
    stylesheets: {
      joinTo: '/css/app.css'
    }
  },

  plugins: {
    babel: {
      presets: ['es2015']
    }
  }
};
