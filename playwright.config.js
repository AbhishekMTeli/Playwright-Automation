// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  // Directory containing your test files
  testDir: './tests',

  // Maximum time one test can run in milliseconds
  timeout: 30 * 1000,

  // Retry on failures (2 retries on CI, none locally)
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers (1 on CI, default locally)
  workers: process.env.CI ? 1 : undefined,

  // Output folder for test artifacts like screenshots and videos
  outputDir: 'test-results/',

  // Global settings applied to all tests
  use: {
    // Run browsers in headless mode
    headless: true,

    // Enable parallel test execution within tests
    fullyParallel: true,

    // Base URL for relative page.goto() calls
    baseURL: 'https://your-app-url.com',

    // Capture screenshots only when test fails
    screenshot: 'only-on-failure',

    // Save videos for retry attempts
    video: 'retry-with-video',

    // Record trace for the first retry
    trace: 'on-first-retry',

    // Timeout for each action (click, fill)
    actionTimeout: 10 * 1000,

    // Ignore HTTPS errors (helpful for local dev environments)
    ignoreHTTPSErrors: true,

    // Slow down actions for debugging (uncomment if needed)
    // slowMo: 50,

    // Storage state file for authenticated sessions (optional)
    // storageState: 'state.json',
  },

  // Test reporters to generate test result outputs
  reporter: [
    ['list'], // Console output
    ['html', { open: 'never' }], // HTML report (does not auto-open)
    ['junit', { outputFile: 'test-results/junit/results.xml' }], // JUnit for CI integration
    ['json', { outputFile: 'test-results/json/results.json' }] // JSON format
  ],

  // Projects allow you to run tests across browsers and devices
  projects: [
    {
      name: 'Chromium Desktop',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
         viewport : {width:1536,height:838},
         screenshot : 'only-on-failure' ,
         video : 'retain-on-failure' ,
         trace : 'on'
      },
    }
    // ,
    // {
    //   name: 'Firefox Desktop',
    //   use: {
    //     browserName: 'firefox',
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    // {
    //   name: 'WebKit Desktop',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     browserName: 'chromium',
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['iPhone 12'],
    //   },
    // }
     ,
  ],

  // Global setup and teardown scripts (optional)
  // globalSetup: require.resolve('./global-setup.js'),
  // globalTeardown: require.resolve('./global-teardown.js'),

  // Pattern to locate test files (optional override)
  // testMatch: '**/?(*.)+(spec|test).[jt]s',
};
