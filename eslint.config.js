import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react'; // <-- 1. Import the plugin
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Global ignores
  { ignores: ['dist/'] },

  // ESLint recommended base rules
  js.configs.recommended,

  // React core rules
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: react, // <-- 2. Register the plugin
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...react.configs.recommended.rules, // <-- 3. Add recommended React rules
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'react/jsx-uses-react': 'off',     // Not needed for React 17+
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },

  // React Hooks and Refresh rules
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];