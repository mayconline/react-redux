#### Eslint

1. npm install eslint --save-dev
2. npx eslint --init
3. find in package.json other dependency

```module.exports = {
env: {
browser: true,
es6: true,
},
extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
globals: {
Atomics: 'readonly',
SharedArrayBuffer: 'readonly',
},
parser: 'babel-eslint',
parserOptions: {
ecmaFeatures: {
jsx: true,
},
ecmaVersion: 2018,
sourceType: 'module',
},
plugins: ['react', 'react-hooks', 'prettier'],
rules: {
'prettier/prettier': 'error',
'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
'react-hooks/rules-of-hooks': 'error',
'react-hooks/exhaustive-deps': 'warn',
'no-underscore-dangle': 'off',
'react/prop-types': 'off',
'jsx-a11y/label-has-associated-control': 'off',
},
};
```

#### Prettier

1.  npm install --save-dev --save-exact prettier
2.  make file .prettierrc

````{
"singleQuote": true,
"trailingComma": "es5"
}```



#### Open Settings JSON


1. CTRL + SHIFT + P

2. insert in file

   ```"javascript.updateImportsOnFileMove.enabled": "always", "editor.formatOnSave": true,
   "prettier.singleQuote": true,
   "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true, "source.organizeImports": true
       },```
````
