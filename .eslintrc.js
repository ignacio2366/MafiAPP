module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'], // Add import plugin
  rules: {}, // No global rules needed, handled in overrides
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Target TypeScript files
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      rules: {
        'import/prefer-default-export': 'off',
        		'import/order': [
			'error',
			{
				groups: [
					['external', 'builtin'],
					'internal',
					['sibling', 'parent'],
					'index',
				],
				pathGroups: [
					{
						pattern: '@(react|react-native)',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '@src/**',
						group: 'internal',
					},
				],
				pathGroupsExcludedImportTypes: ['internal', 'react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
        'import/extensions': [
          'off',
          'ignorePackages',
          {
            'js': 'never',
            'jsx': 'never',
            'ts': 'never',
            'tsx': 'never',
          },
        ],
      },
    },
  ],
};