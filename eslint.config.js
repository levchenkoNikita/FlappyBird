import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js, react }, 
    extends: ["js/recommended", "plugin:react/jsx-runtime"], 
    rules: {
      'no-console': 'warn',
      'eqeqeq': 'warn',
      'curly': 'warn',
      'no-else-return': 'warn',
      "react/react-in-jsx-scope": "off"
    },
    languageOptions: { globals: globals.browser }
  },
  pluginReact.configs.flat.recommended,
]);
