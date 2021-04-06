import axios from 'axios';

const apiKey = '55ba04f3c3efaecf7e2b';

export const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

export const graphInstance = axios.create({
  baseURL: `https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=EUR_USD,EUR_GBP&compact=ultra&date=2020-12-26&endDate=2020-12-31`,
});
