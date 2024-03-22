const TokenInfo = require('./tokenSchema');

// CRUD operations
// Create
const createTokenInfo = async (tokenInfo) => {
  const result = await TokenInfo.create(tokenInfo);
  return result;
};

// Read
const getTokenInfos = async () => {
  const tokenInfos = await TokenInfo.find();
  return tokenInfos;
};

// Read specific token info by id
const getTokenInfoById = async (id) => {
    const tokenInfo = await TokenInfo.findById(id);
    return tokenInfo;
  };

// Update
const updateTokenInfo = async (id, tokenInfo) => {
  const result = await TokenInfo.updateOne({ _id: id }, {
    $set: tokenInfo
  });
  return result;
};

// Delete
const deleteTokenInfo = async (id) => {
  result = await TokenInfo.deleteOne({ _id: id });
  return result;
};

module.exports = { createTokenInfo, getTokenInfos, updateTokenInfo, deleteTokenInfo,getTokenInfoById };