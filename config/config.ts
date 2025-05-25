import dotenv from 'dotenv';
dotenv.config();

export const credentials = {
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
};

export const urls = {
  baseUrl: 'https://www.saucedemo.com',
  apiUrl: 'https://airportgap.com'
};