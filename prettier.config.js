// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	// $schema: "https://json.schemastore.org/prettierrc",
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	arrowParens: "always",
	endOfLine: "lf",
	// tab缩进大小,默认为2
	useTabs: true,
	// tabWidth: 4,
};

export default config;
