// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb'],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react'],
//   rules: {
//     'max-len': 0,
//     'no-param-reassign': 0,
//     'jsx-a11y/label-has-associated-control': 0,
//     'react/function-component-definition': 0,
//     'react/react-in-jsx-scope': 0,
//     'import/extensions': 0,
//     'react/prop-types': 0,
//     'linebreak-style': 0,
//     'react/state-in-constructor': 0,
//     'import/prefer-default-export': 0,
//     'no-multiple-empty-lines': [
//       'error',
//       {
//         max: 1,
//         maxEOF: 1,
//       },
//     ],
//     'no-underscore-dangle': [
//       'error',
//       {
//         allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
//       },
//     ],
//     'object-curly-newline': 0,
//     'react/jsx-filename-extension': 0,
//     'react/jsx-one-expression-per-line': 0,
//     'jsx-a11y/click-events-have-key-events': 0,
//     'jsx-a11y/alt-text': 0,
//     'jsx-a11y/no-autofocus': 0,
//     'jsx-a11y/no-static-element-interactions': 0,
//     'react/no-array-index-key': 0,
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         components: ['Link'],
//         specialLink: ['to', 'hrefLeft', 'hrefRight'],
//         aspects: ['noHref', 'invalidHref', 'preferButton'],
//       },
//     ],
//   },
// }
// config next
module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jsx-a11y/recommended', 'plugin:react-hooks/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'no-debugger': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    radix: 0,
    'no-shadow': 'off',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 130,
        semi: false,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'no-empty': 'warn',
    'import/order': 'off',
    'react/prop-types': 0,
  },
}
