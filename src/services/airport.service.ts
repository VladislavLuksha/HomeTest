import { ApiClient } from '../api/api.client';
import Endpoints from '../api/endpoints';
import { AirportsResponse, DistanceResponse } from '../interfaces/api.types';

const client = new ApiClient();

export class AirportService {
  static async getAirports() {
    return client.get<AirportsResponse>(Endpoints.AIRPORTS);
  }

  static async getDistance(from: string, to: string) {
    return client.post<DistanceResponse>(Endpoints.AIRPORTS_DISTANCE, { from, to });
  }
}