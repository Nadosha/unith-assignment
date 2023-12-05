module.exports = {
    roots: ['<rootDir>/'],
    modulePaths: ['<rootDir>/'],
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageReporters: ['lcov'],
    collectCoverageFrom: [
        '<rootDir>/components/**/*.{ts,tsx}',
        '<rootDir>/utils/**/*.{ts,tsx}',
        '!**/*.styles.*',
    ],
    setupFiles: [],
    setupFilesAfterEnv: [],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
    testPathIgnorePatterns: [
        '/node_modules',
    ],
    transform: {'^.+\\.(js|ts|tsx)x?$': 'ts-jest',},
    moduleNameMapper: {
        // "^@App/(.*)$": "<rootDir>/src/$1",
        '^@Components/(.*)$': ['<rootDir>/src/components/$1'],
        '^@Features(.*)$': ['<rootDir>/src/features/$1'],
        '^@Hooks/(.*)$': ['<rootDir>/src/hooks/$1'],
        '^@Redux/(.*)$': ['<rootDir>/src/redux/$1'],
        '^@Theme/(.*)$': ['<rootDir>/src/theme/$1'],
        '^@Types/(.*)$': ['<rootDir>/src/types/$1'],
        '^@Utils(.*)$': '<rootDir>/src/utils/$1',
    },
};

