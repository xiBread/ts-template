import config from "@antfu/eslint-config";

export default config({
	rules: {
		"curly": "off",
		"no-console": "off",
		"jsonc/sort-keys": "off",
		"ts/ban-ts-comment": "off",
		"ts/prefer-ts-expect-error": "off",
	},
	stylistic: {
		indent: "tab",
		quotes: "double",
		semi: true,
		overrides: {
			"antfu/if-newline": "off",
			"style/max-len": ["error", { code: 100 }],
		},
	},
	jsx: false,
	toml: false,
});
