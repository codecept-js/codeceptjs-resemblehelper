const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../tests/prepareBaseImage-true_test.js',
  output: '../output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: '1200x800',
    },
    ResembleHelper: {
      require: '../index',
      screenshotFolder: '../tests/output/',
      baseFolder: '../tests/screenshots/base/',
      diffFolder: '../tests/screenshots/diff/',
      /*
      prepareBaseImage = Optional. When true then the system replaces all of the baselines related to the test case(s) you ran.
      This is equivalent of setting the option prepareBaseImage: true in all verifications of the test file.
      */
      prepareBaseImage: true,
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  include: {
    I: '../steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-resemblehelper',
  plugins: {
    pauseOnFail: {},
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
