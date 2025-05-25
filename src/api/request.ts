import request from 'supertest';
import { urls } from '../../config/config';

export const api = request(urls.apiUrl);