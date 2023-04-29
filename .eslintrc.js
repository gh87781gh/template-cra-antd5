module.exports = {
  extends: ['eason'],
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      extends: ['eason/typescript'],
    },
  ],
  rules: {
    'no-console': 2,
  },
}
