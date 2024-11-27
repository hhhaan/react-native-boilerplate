module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                alias: {
                    '@': './src',
                    '@app/*': './src/app',
                    '@features': './src/features',
                    '@widgets': './src/widgets',
                    '@screens': './src/screens',
                    '@entities': './src/entities',
                    '@shared': './src/shared',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
                safe: true,
                allowUndefined: false,
            },
        ],
        '@babel/plugin-syntax-dynamic-import',
        ...(process.env.NODE_ENV === 'production'
            ? ['transform-remove-console']
            : []),
    ],
};
