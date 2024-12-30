import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  {
  parserOptions: {
    ecmaVersion: 12, // ou 2021
    sourceType: 'module', // Define o tipo de módulo como ESM
  },
  extends: [
      'eslint:recommended'
  ],
  rules: {
      // Suas regras personalizadas
  },
  },
  pluginJs.configs.recommended,
];
