import dotenv from 'dotenv';
import { User } from '../src/interfaces/user';
dotenv.config();

export const credentials: User = {
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
};

export const lockedOutUser: User = {
  username: process.env.USERNAME_LOCKED || '',
  password: process.env.PASSWORD_LOCKED || '',
};

export const urls = {
  baseUrl: 'https://www.saucedemo.com',
  apiUrl: 'https://airportgap.com'
};