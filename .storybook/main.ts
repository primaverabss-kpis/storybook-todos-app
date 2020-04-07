module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    },
  ],
};
