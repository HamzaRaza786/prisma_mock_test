import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "testRegex": ".*\\.test\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node",
    "setupFilesAfterEnv": ['<rootDir>/singleton.ts']
  }

export default config

