# @flora-suite/eslint-plugin

[![npm package](https://img.shields.io/npm/v/@flora-suite/eslint-plugin)](https://www.npmjs.com/package/@flora-suite/eslint-plugin)

Flora Suite default eslint configuration & rules.

## Rules

See [rules/README.md](rules/README.md) for details on each rule.

## Installation

```sh
yarn add -D \
    @flora-suite/eslint-plugin \
    typescript-eslint \
    eslint \
    prettier
```

In your `eslint.config.cjs`:

```js
const flora = require("@flora-suite/eslint-plugin");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  ...flora.configs.base,
  ...flora.configs.react,
  ...flora.configs.jest,
  ...flora.configs.typescript
);
```

## License

@flora-suite/eslint-plugin is released under the [MIT License](/LICENSE.md).

## Releasing

**Note**: You must use npm 7+ (not yarn) to test this repo locally, due to the self link in `package.json`.

```sh
tag=$(npm version minor) && echo "$tag"
git push && git push origin "$tag"
```

## Stay in touch

Join our [Slack channel](https://flora.fan) to ask questions, share feedback, and stay up to date on what our team is working on.
