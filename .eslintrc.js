module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
			'vue/singleline-html-element-content-newline': 'off',
			'vue/attributes-order': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/max-attributes-per-lin': 'off',
			'vue/html-indent': 'off',
			'vue/multi-word-component-names': 'off',
			"@typescript-eslint/no-explicit-any": "off"
		},
    plugins: ['@typescript-eslint', 'prettier']
};
