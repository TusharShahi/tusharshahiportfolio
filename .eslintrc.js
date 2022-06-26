module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "prettier", "next"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "require-jsdoc": 0,
    "prefer-const": 0,
    "spaced-comment": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "no-undef": ["error", { typeof: true }],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ],
    "@next/next/no-img-element": "off",
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "no-console": ["error"],
    camelcase: [
      "error",
      {
        ignoreDestructuring: true,
        allow: ["unstable_"]
      }
    ]
  },

  settings: {
    react: {
      version: "latest"
    }
  }
};
