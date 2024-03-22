const express = require('express');
const { createTokenInfo, getTokenInfos, updateTokenInfo, deleteTokenInfo,getTokenInfoById } = require('./tokenInfoOperations');
const createSampleData = require('./sampleDataset');

const connectToMongoDB=require('./db');
connectToMongoDB();
const app = express();
app.use(express.json());
require('dotenv').config();


//createSampleData(); //to create a sample Data
 
// Fetch all token info
app.get('/api/tokenInfos', async (req, res) => {
  try {
    const tokenInfos = await getTokenInfos();
    res.send(tokenInfos);
  } catch (err) {
    res.status(500).send('Error fetching token info');
  }
});


// Create a token
app.post('/api/tokenInfos', async (req, res) => {
    try {
      const tokenInfo = req.body;
      const result = await createTokenInfo(tokenInfo);
      res.send(result);
    } catch (err) {
      res.status(500).send('Error creating token info');
    }
  });

// Fetch specific token info
app.get('/api/tokenInfos/:id', async (req, res) => {
    try {
      const tokenInfo = await getTokenInfoById(req.params.id);
      if (!tokenInfo) return res.status(404).send('Token info not found');
      res.send(tokenInfo);
    } catch (err) {
      res.status(500).send('Error fetching token info');
      console.log(err);
    }
  });

// Update token info
app.put('/api/tokenInfos/:id', async (req, res) => {
  try {
    const tokenInfo = req.body;
    await updateTokenInfo(req.params.id, tokenInfo);
    res.send(tokenInfo);
  } catch (err) {
    res.status(500).send('Error updating token info');
    console.log(err);
  }
});


// Delete a token
app.delete('/api/tokenInfos/:id', async (req, res) => {
    try {
      const result = await deleteTokenInfo(req.params.id);
      res.send(result);
    } catch (err) {
      res.status(500).send('Error deleting token info');
    }
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));