const { createTokenInfo } = require('./tokenInfoOperations');

const createSampleData = async () => {
  await createTokenInfo({
    priceNative: '0.006562',
    priceUsd: '0.004006',
    volume: {
      h24: 224746.2,
      h6: 18324.86,
      h1: 1052.42,
      m5: 1.84
    }
  });

  await createTokenInfo({
    priceNative: '0.008000',
    priceUsd: '0.005000',
    volume: {
      h24: 250000.0,
      h6: 20000.0,
      h1: 1500.0,
      m5: 3.0
    }
  });

    await createTokenInfo({
        priceNative: '0.006562',
        priceUsd: '0.004006',
        volume: {
        h24: 224746.2,
        h6: 18324.86,
        h1: 1052.42,
        m5: 1.84
        }
    });
};

module.exports = createSampleData;