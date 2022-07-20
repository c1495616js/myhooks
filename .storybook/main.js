module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.md?$/,
      use: [
        {
          loader: 'markdown-loader',
          options: {
            // Pass options to marked
            // See https://marked.js.org/using_advanced#options
            highlight: function (code, lang) {
              const hljs = require('highlight.js');
              const language = hljs.getLanguage(lang) ? lang : 'plaintext';
              return hljs.highlight(code, { language }).value;
            },
          },
        },
      ],
    });

    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
    config.resolve.enforceExtension = false;

    // disable the hint about too big bundle
    config.performance.hints = false;

    return config;
  },
};
