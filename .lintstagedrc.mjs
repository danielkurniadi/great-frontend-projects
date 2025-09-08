const lintStaged = {
  "**/*.{cjs,mjs,js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"],
  "**/*.{html,css,scss,json,md}": "prettier --write",
};

export default lintStaged;
