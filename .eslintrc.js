module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/recommended", "airbnb-base", "prettier", "prettier/vue"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "comma-dangle": ["error", "never"],
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    "import/no-unresolved": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".vue"]
      }
    }
  }
};
