import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // General settings, like ignoring the dist folder
  { ignores: ['dist'] },

  // Configuration for JavaScript and JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // ECMA Script 2020
      globals: globals.browser, // Browser globals
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMA version
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Support ES Modules
      },
    },
    settings: {
      react: { version: '18.3' }, // Automatically detect React version
    },
    plugins: {
      react, // React plugin
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin for HMR
    },
    rules: {
      ...js.configs.recommended.rules, // Default JavaScript rules
      ...react.configs.recommended.rules, // Recommended React rules
      ...react.configs['jsx-runtime'].rules, // JSX Runtime rules
      ...reactHooks.configs.recommended.rules, // Recommended React Hooks rules

      // Custom rule overrides
      'react/jsx-no-target-blank': 'off', // Disable warnings for target="_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow constant export for HMR
      ],
    },
  },
];
