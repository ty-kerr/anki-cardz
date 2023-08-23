module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    eqeqeq: ["error", "always"],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_",
        destructuredArrayIgnorePattern: "_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
  },
}
