module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src', '<rootDir>/__tests__'],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: './tsconfig.jest.json',
            diagnostics: true
        }]
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1'
    }    
};
