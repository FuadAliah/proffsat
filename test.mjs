// import globals from "globals";
// import tseslint from "@typescript-eslint/eslint-plugin";
// import pluginReact from "eslint-plugin-react";
// import nextjs from "eslint-config-next";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
//     languageOptions: {
//       globals: {
//         ...globals.browser, // ✅ Includes browser globals
//         ...globals.node, // ✅ Includes Node.js globals
//       },
//       parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         project: "./tsconfig.json",
//       },
//     },
//     plugins: {
//       react: pluginReact,
//       "@typescript-eslint": tseslint,
//     },

//     rules: {
//       "react/react-in-jsx-scope": "off", // Disable the rule for React 17+
//       "no-console": "error",
//       "no-unused-vars": "warn",
//     },
//     settings: {
//       react: {
//         version: "detect",
//       },
//     },
//   },
//   ...pluginReact.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...nextjs.configs.coreWebVitals,
// ];
