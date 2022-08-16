import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src/tests/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/tests/index.test.(ts|js)'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
export default config
