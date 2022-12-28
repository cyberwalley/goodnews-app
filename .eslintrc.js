module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "rules": {
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'default',
                        format: null,
                        modifiers: ['requiresQuotes'],
                    },
                    {
                        selector: 'default',
                        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow',
                        trailingUnderscore: 'allow',
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                ],
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }

}
