import Endpoints from '../api/endpoints';
import { api } from '../api/request';

export class AirportService {
  static getAirports() {
    return api.get(Endpoints.AIRPORTS);
  }

  static getDistance(from: string, to: string) {
    return api.post(Endpoints.AIRPORTS_DISTANCE).send({ from, to });
  }
}