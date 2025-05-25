import Endpoints from '../api/endpoints';
import { api } from '../api/request';
import { AirportsResponse, DistanceResponse } from '../types/api.types';

export class AirportService {
  static async getAirports(): Promise<AirportsResponse> {
    const res = await api.get(Endpoints.AIRPORTS);
    return res.body;
  }

  static async getDistance(from: string, to: string): Promise<DistanceResponse> {
    const res = await api.post(Endpoints.AIRPORTS_DISTANCE).send({ from, to });
    return res.body;
  }
}