# Token Info API

This API allows you to create, read, update, and delete token info.

## API Endpoints

### GET /api/tokenInfos

Fetches all token info.

### GET /api/tokenInfos/:id

Fetches specific token info by id.

### DELETE /api/tokenInfos/:id

Deletes specific token info by id.

### POST /api/tokenInfos

Creates a new token info.



Request body should be a JSON object with the following structure:

```json
{
  "priceNative": "0.006562",
  "priceUsd": "0.004006",
  "volume": {
    "h24": 224746.2,
    "h6": 18324.86,
    "h1": 1052.42,
    "m5": 1.84
  }
}

```
### PUT /api/tokenInfos/:id
Updates specific token info by id.

Request body should be a JSON object with the fields to update:

```
{
  "priceNative": "0.007000"
}
```





This README provides a brief description of each API endpoint, including the HTTP method, the URL, and the structure of the request body where applicable. You can expand on this with more details as needed.