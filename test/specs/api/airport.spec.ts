import { expect } from 'chai';
import { AirportService } from '../../../src/services/airport.service';

describe('AirportGap API Tests', () => {
  it('should return exactly 30 airports', async () => {
    const resp = await AirportService.getAirports();

    expect(resp.status).to.equal(200);
    expect(resp.body.data).to.have.lengthOf(30);
  });

  const airportNames = ['Akureyri Airport', 'St. Anthony Airport', 'CFB Bagotville'];

  airportNames.forEach((name) => {
    it(`should include ${name} in the list`, async () => {
      const resp = await AirportService.getAirports();
      const airportNames = resp.body.data.map((a) => a.attributes.name);
      expect(airportNames).to.include(name);
    });
  });

  it('should calculate distance between KIX and NRT > 400 km', async () => {
    const resp = await AirportService.getDistance('KIX', 'NRT');
    const distance = resp.body.data.attributes.kilometers;

    expect(resp.status).to.equal(200);
    expect(distance).to.be.above(400);
  });
});