// @ts-check
/// <reference types="@eslint-types/typescript-eslint" />

const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	root: true,
	env: {
		node: true,
		es2023: true,
	},
	reportUnusedDisableDirectives: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"prettier",
	],
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		project: true,
		tsconfigRootDir: __dirname,
	},
	ignorePatterns: ["*.js"],
	rules: {
		"default-param-last": "error",
		"no-empty": "off",
		"no-trailing-spaces": "error",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
			},
		],
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/method-signature-style": ["error", "method"],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "enumMember",
				format: ["PascalCase", "UPPER_CASE"],
			},
		],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-invalid-this": [
			"error",
			{
				capIsConstructor: false,
			},
		],
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unnecessary-condition": [
			"error",
			{
				allowConstantLoopConditions: true,
			},
		],
	},
});
