module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        return postcssLoaderOptions;
      },
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
} 