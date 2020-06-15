module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:react/recommended', './node_modules/gts/'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
