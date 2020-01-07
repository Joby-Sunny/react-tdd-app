const IS_PRODUCTION = process.env.NODE_ENV === 'production';

if (IS_PRODUCTION) {
  const purgecss = require('purgecss');
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-:\/]+/g) || [];
    }
  }
  plugins.push(
    purgecss({
      content: ['public/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html']
        }
      ]
    })
  );
}

module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')
  ]
};
