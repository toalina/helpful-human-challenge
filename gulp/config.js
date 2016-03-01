var dest = "./public";
var src = "./src";

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/',
    entry: src + '/js/entry.js',
    outputFilename: 'packed.js'
  },
  sass: {
    src: src + "/sass/{,*/}*.{scss,sass}",
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true,
    }
  },
  index: {
    src: src + "/index.html",
    dest: dest + "/"
  },
  server: {
    src: dest,
    livereload: true,
    directoryListing: false,
    open: false,
    port: 4000
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    jsDest: dest + '/js/uglify.js',
    dest: dest
  }
};
