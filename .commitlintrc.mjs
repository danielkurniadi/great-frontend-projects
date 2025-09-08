import conventional from "@commitlint/config-conventional";

const commitLintConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    ...conventional.rules,
    "type-enum": [
      2,
      "always",
      ["feat", "feature", "fix", "refactor", "docs", "build", "test", "ci", "chore"],
    ],
  },
};

export default commitLintConfig;
