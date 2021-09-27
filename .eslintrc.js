module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "@vue/prettier", "plugin:vue/base"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
  },
};
