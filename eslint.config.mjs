import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',

      "prettier/prettier": "error",
      "@typescript-eslint/indent": "off", // Let Prettier handle indentation
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-invalid-void-type": 0,
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/quotes": "off",
      
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-empty-interface": "off",
    },
  }),
]

export default eslintConfig