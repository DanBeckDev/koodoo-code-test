export default {
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'html'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    roots: ['src'],
};
