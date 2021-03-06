const config = (() => {
  const { TOKEN } =
    process.env.NODE_ENV === 'production' ? process.env : require('../config');

  return { TOKEN };
})();

module.exports = {
  token: config.TOKEN,
  prefix: '.',
  commandDelimiter: '\n',
  commandLimit: '5'
};
