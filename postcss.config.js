const config  = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
  ],
};

const purgeCss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:]+/g) || [],
  },
]

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(purgeCss)
}

module.exports = config