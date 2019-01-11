import gphApiClient from 'giphy-js-sdk-core';

const { REACT_APP_API_KEY } = process.env;
const client = gphApiClient(REACT_APP_API_KEY);

export function searchGifs({ q }) {
  return new Promise((resolve, reject) => {
    client.search('gifs', { q })
      .then((response) => {
        response.data.forEach((gifObject) => resolve(gifObject));
      })
      .catch((err) => reject(err));
  });
}
