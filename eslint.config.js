import globals from 'globals'
import pluginJs from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'prefer-template': 'warn',
    },
  },
  pluginJs.configs.recommended,
  prettier,
]