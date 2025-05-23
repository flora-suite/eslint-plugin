const floraSuite = require("@flora-suite/eslint-plugin");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  {
    ignores: ["dist"],
  },
  ...floraSuite.configs.base,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  ...floraSuite.configs.typescript.map((config) => ({
    ...config,
    files: ["**/*.@(ts|tsx)"],
  })),
  ...floraSuite.configs.react.map((config) => ({
    ...config,
    files: ["**/*.@(jsx|tsx)"],
  })),
  ...floraSuite.configs.jest.map((config) => ({
    ...config,
    files: ["**/*.test.@(js|jsx|ts|tsx)"],
  }))
);
