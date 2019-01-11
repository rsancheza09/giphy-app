import gphApiClient from 'giphy-js-sdk-core';
import request from 'superagent';

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
const client = gphApiClient(REACT_APP_API_KEY);

// GIFS
// Search using Giphy JS SDK
export function searchGifs({ q }) {
  return new Promise((resolve, reject) => {
    client.search('gifs', { q, limit: 25 })
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err));
  });
};

// Stickers
// Search using a http client library (Superagent)
export function searchStickers({ q }) {
  return new Promise((resolve, reject) => {
    request.get(`${REACT_APP_API_URL}/v1/stickers/search?q=${q}&api_key=${REACT_APP_API_KEY}&limit=25`)
      .then((resp) => resolve(resp.body.data))
      .catch((err) => reject(err));
  });
}

// Trending
// Search using a http client library (Superagent)
export function getTrending() {
  return new Promise((resolve, reject) => {
    request.get(`${REACT_APP_API_URL}/v1/gifs/trending?api_key=${REACT_APP_API_KEY}`)
      .then((resp) => resolve(resp.body.data))
      .catch((err) => reject(err));
  });
}
