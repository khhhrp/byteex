import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { ignores: ["dist"] },

  {
    files: ["**/*.{js,jsx}"],

    ...js.configs.recommended,
    ...reactHooks.configs.recommended,
    ...reactRefresh.configs.vite,

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      "no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
      "no-undef": "off",
      "no-empty-pattern": "off",
      "no-console": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },

  eslintPluginPrettierRecommended,
];
