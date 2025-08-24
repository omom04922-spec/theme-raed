module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
    '<rootDir>/src/**/__tests__/**/*.js',
    '<rootDir>/src/**/*.test.js'
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.min.js',
    '!src/assets/vendor/**',
    '!src/**/__tests__/**',
    '!src/**/*.test.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@js/(.*)$': '<rootDir>/src/assets/js/$1',
    '^@styles/(.*)$': '<rootDir>/src/assets/styles/$1',
    '^@images/(.*)$': '<rootDir>/src/assets/images/$1',
    '^@components/(.*)$': '<rootDir>/src/views/components/$1'
  },
  transform: {
    '^.+\.js$': 'babel-jest'
  },
  moduleFileExtensions: [
    'js',
    'json'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/public/'
  ],
  verbose: true,
  clearMocks: true,
  restoreMocks: true
};