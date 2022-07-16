module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'linebreak-style': ["error", "windows"],
    'semi': ["error", "never"],
    "indent": ["error", 2],
    "comma-dangle": ["error", "never"],
    
    "react/prop-types": 0
  },
};
