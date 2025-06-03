import request, { Response, Test } from 'supertest';
import { urls } from '../../config/config';
import { ApiError } from '../errors/api.error';

export interface RequestOptions {
    headers?: Record<string, string>;
    log?: boolean;
    token?: string;
}

export class ApiClient {
    private readonly client;

    constructor(private readonly baseUrl = urls.apiUrl) {
        this.client = request(baseUrl);
    }

    async get<T>(path: string, options: RequestOptions = {}): Promise<{ status: number; body: T }> {
        let req = this.client.get(path);
        req = this.prepareRequest(req, options);
        const res = await req;

        return this.handleResponse<T>(res, path, 'GET', options.log);
    }

    async post<T>(path: string, data: object, options: RequestOptions = {}): Promise<{ status: number; body: T }> {
        let req = this.client.post(path).send(data);
        req = this.prepareRequest(req, options);
        const res = await req;
        return this.handleResponse<T>(res, path, 'POST', options.log, data);
    }

    private prepareRequest(req: Test, options: RequestOptions): Test {
        if (options.token) {
          req.set('Authorization', `Bearer ${options.token}`);
        }
    
        if (options.headers) {
          Object.entries(options.headers).forEach(([key, value]) => {
            req.set(key, value);
          });
        }
    
        return req;
    }

    private handleResponse<T>(res: Response, path: string, method: string, log = false, body?: any): { status: number; body: T } {
        if (log) {
            console.log(`${method} ${this.baseUrl}${path}`);
            if (body) console.log('Request body:', body);
            console.log('Response:', res.status, JSON.stringify(res.body, null, 2));
        }
    
        if (res.status >= 200 && res.status < 300) {
            return { status: res.status, body: res.body as T };
        } else {
            throw new ApiError(res.status, 'API Error', res.body);
        }
    }
}