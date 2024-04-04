import config from "@antfu/eslint-config";

export default config({
	rules: {
		"curly": "off",
		"no-console": "off",
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
	typescript: {
		overrides: {
			"ts/ban-ts-comment": "off",
		},
	},
	jsx: false,
	toml: false,
});
