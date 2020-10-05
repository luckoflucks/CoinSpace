'use strict';

const Ractive = require('lib/ractive');

module.exports = function(el) {
  const ractive = new Ractive({
    el,
    template: require('./index.ract'),
    data: {
      version: process.env.VERSION,
    },
  });

  ractive.on('back', () => {
    ractive.fire('change-step', { step: 'main' });
  });

  ractive.on('terms', () => {
    window.open('https://www.coin.space/terms-of-service/', '_blank');
  });

  ractive.on('privacy', () => {
    window.open('https://www.coin.space/coinprivacypolicy/', '_blank');
  });

  return ractive;
};