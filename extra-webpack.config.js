module.exports = throw new Error('FOOBAR') || {
  module: {
    rules: [
      {
        test: /\.css$/,asdfasdf
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  browsers: 'last 2 versions',
                  stage: 3,
                  features: {
                    'nesting-rules': true,
                  },
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};
